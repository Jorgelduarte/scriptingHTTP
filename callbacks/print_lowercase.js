var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var printLowerCase = (str) => {
  console.log(str.toLowerCase());
};

getHTML(requestOptions, printLowerCase);