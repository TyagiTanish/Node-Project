module.exports = async (req,res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.send(error)
  }
  
};
