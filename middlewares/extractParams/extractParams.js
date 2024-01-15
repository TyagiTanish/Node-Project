const extractParam = (param) => (req, res, next) => {
  console.log("Hello");
  req[param] = req.params[param];
  req.email;
  next();
};

module.exports = extractParam;
