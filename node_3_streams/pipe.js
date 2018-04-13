const request = require('request');
// var s = request('http://www.pluralsight.com/');
var fs = require('fs');
var zlib = require('zlib');

// s.pipe(process.stdout);

// request('http://www.pluralsight.com/').pipe(process.stdout);
request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));
// request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html'));
