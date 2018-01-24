var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
  var requestOptions = {
    host: options.host,
    path: options.path
  };
  /* Add your code here */
  https.get(requestOptions, (response) =>{

   response.setEncoding('utf8');
   response.on('data',(data) => {
    callback(data);
   });
   response.on('error', (err) => {
    console.log("Error" + err);
   });
   response.on('end', () => {
    console.log('Response stream complete.')
   });
  });
};