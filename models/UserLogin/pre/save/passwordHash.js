const bcrypt = require("bcrypt");

module.exports = async function encrypt() {
  this.password = await bcrypt.hash(this.password, 10);
};
