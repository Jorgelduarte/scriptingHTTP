var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var printUpperCase = (str) => {
  console.log(str.toUpperCase());
};

getHTML(requestOptions, printUpperCase);