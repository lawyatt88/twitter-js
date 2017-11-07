const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball')

app.use(volleyball)

app.listen(3000, function () {
    console.log('Listening on port 3000!')
  })

// app.use("/", function (req, res, next) {
// // Remember - one request, one response!
//     console.log(req.method, req.url, res.statusCode);
//     next();
// })

// app.use("/special", function (req, res, next) {
//     //console.log(req.method, req.url, res.statusCode);
//     console.log('you reached the special area');
// })