const hotelDetails = require("../../models/Hotel/hotelSchema");

module.exports = async (req, res) => {
  try {
    if (!req.id) {
      if(Object.keys(req.query).length === 0){
       
        const data = await hotelDetails.find({}).populate('ownerId');
        res.send(data);
      }
      else{
        const search=req.query.search;
       
        if(search===""){

        const data = await hotelDetails.find({}).populate('ownerId');
        res.send(data);
        }
        else{
          const data = await hotelDetails.find({$or: [
            { hotelName: { $regex: search, $options: 'i' } },
           
            
          ]}).populate('ownerId');
          res.send(data);

        }
      
      }
   
    } else {
      
      if(Object.keys(req.query).length === 0){
      
        const data = await hotelDetails.find({ _id: req.id});
        res.send(data);
      }
      else{

        const search=req.query.search;
        if(search===""){
          const data = await hotelDetails.find({ _id: req.id});
          res.send(data);

        }
        else{
          const data = await hotelDetails.find({ _id: req.id,$or: [
            {hotelName: { $regex: search, $options: 'i' } },
          
            
          ]})
          res.send(data);
        }
       
      }


    }
  } catch (error) {
    console.log(error)
    res.send(error);
  }

  // console.log(dataa);
};
