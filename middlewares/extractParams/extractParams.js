const extractParam = (param) => (req, res, next) => {
    req[param] = req.params[param];
    req.email
    next();
  };
  
  module.exports = extractParam;