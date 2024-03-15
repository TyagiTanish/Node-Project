var htmlPdf = require("html-pdf");

let options = {
  type: "pdf",
  format: "Letter",
  childProcessOptions: {
    env: {
      OPENSSL_CONF: "/dev/null",
    },
  },
};
module.exports = async (template, key) => {
  let file = template;
  const buffer = new Promise((resolve, reject) => {
    htmlPdf.create(file, options).toBuffer(function (err, res) {
      if (err) {
        // console.log({ err });
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
  return buffer;
};
