var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var printReverse = (str) => {
  console.log(str.split("").reverse().join(""));
};

getHTML(requestOptions, printReverse);