const bcrypt = require("bcrypt");

module.exports = async function encrypt() {
  this.Password = await bcrypt.hash(this.Password, 10);
};
