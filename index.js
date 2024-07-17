const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./db/connect");
const multer = require("multer");
const memberRegister = require("./routes/User/member/post/post");
const addHotel = require("./routes/User/member/addHotel");
const addRooms = require("./routes/rooms/addRooms");
const extractParam = require("./middlewares/extractParams/extractParams");
const EditRooms = require("./routes/rooms/EditRooms");
const updateHotel = require('./routes/User/member/updateHotel');
const auth = require("./middlewares/auth");
const { Server } = require('socket.io');
const http = require('http');
const bookings = require("./models/Billing/bookingSchema");
const fs = require('fs')
const path = require('path');
const bookingRemainder = require("./routes/cron-jobs/remainders/bookingRemainder");

dotenv.config();
// const corsOptions = {


app.use(cors())
// const server = require("http").createServer();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (client) => {
  client.on("response", (data) => {
    client.broadcast.emit("recieved", true);
  })

});


bookingRemainder();


const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    let fileLocation = "./Images/";
    // let fileLocation = "/home/prologic/Documents";
    cb(null, fileLocation);
  },
  filename: function (req, files, cb) {
    let fileName = Date.now() + files.originalname;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
});




app.use("/Images", express.static("Images/"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes);
app.post("/registerMember", upload.array("files"), memberRegister);
app.post("/addHotel", upload.array("files"), addHotel);
app.post("/uploadRooms/:id", extractParam("id"), upload.array("files", 4), addRooms);
app.post("/uploadRooms", auth, extractParam("id"), upload.array("files", 4), addRooms);
app.post('/editRoom', auth, upload.array("files", 4), EditRooms)
app.post('/editRoom/:id', extractParam("id"), upload.array("files", 4), EditRooms)
app.post("/uploadRooms", auth, upload.array("files"), addRooms);
app.put('/updateHotel', upload.single('files'), updateHotel);

connect();
const PORT = 8000;


server.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${8000}....`);
});
