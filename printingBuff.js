var https = require('https');

function getAndPrintHTML() {
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, (response) =>{
    var temp = "";
    response.setEncoding('utf8');
    response.on('data',(data) => {
      temp += data;
    });
    response.on('error', (err) => {
      console.log("Error" + err);
    });
    response.on('end', () => {
      console.log(temp);
      console.log('Response stream complete.')
    });
  });

}

getAndPrintHTML();