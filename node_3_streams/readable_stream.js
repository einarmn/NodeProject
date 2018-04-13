const request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', (chunck) => {
  console.log(">>>Data>>> " + chunck);
});

s.on('end', () => {
  console.log(">>>Done!>>>");
});
