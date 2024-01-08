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
dotenv.config();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Credentials",
  ],
};

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

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/", routes);
app.post("/registerMember", upload.array("files"), memberRegister);
app.post("/addHotel", upload.array("files"), addHotel);
app.post("/uploadRooms", upload.array("files"), addRooms);
connect();

app.listen(5000, () => {
  console.log("Listening on port 5000....");
});
