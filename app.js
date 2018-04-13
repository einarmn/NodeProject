var rp = require('request-promise');

// request('http://www.pluralsight.com/', (error, response, body) => {
//   if (!error && response.statusCode === 200) {
//     console.log(body);
//     // console.dir(response);
//   }
// });


rp('http://www.pluralsight.com/')
  .then((htmlString) => {
    console.log(htmlString);

    rp.().then
  })
  .catch((err) => {
    console.log(err);
  });
