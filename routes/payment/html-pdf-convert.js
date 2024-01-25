var htmlPdf = require('html-pdf');

let options = { format: 'letter',type:'pdf'};
module.exports = async (template,key)=>{
    let file = template;
    const buffer = new Promise((resolve, reject) => {
        htmlPdf.create(file, options).toBuffer(function(err, res) {
            if (err) { 
                console.log({err})
                reject(err);
            }
            else{
                resolve(res);
            }
          });
    })
    return buffer
}
