var https = require('https');  

function getHTML (options, cb) {
 /* Add your code here */
 var https = require('https');

 https.get(options, function (response) {
   chunks = []
     // set encoding of received data to UTF-8
     response.setEncoding('utf8');
   
     // the callback is invoked when a `data` chunk is received
     response.on('data', function (chunk) {
       chunks.push(chunk);
     });
     // the callback is invoked when all of the data has been received
     // (the `end` of the stream)
     response.on('end', function() {
       console.log('Response stream complete.');
       var html = chunks.join('');
       return cb(html);
     });
   
   });
}

function printHTML (html) {
 console.log(html);
}

var requestOptions = {
 host: 'sytantris.github.io',
 path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)