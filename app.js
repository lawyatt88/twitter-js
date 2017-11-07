
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(volleyball)

app.listen(3000, function () {
    console.log('Listening on port 3000!')
  })

app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', { noCache: true });

app.use('/', routes);

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get("/" ,function(req, res, next) {
//     res.render( 'index', {title: 'Hall of Fame', people: people}) 
// });

// app.use("/", function (req, res, next) {
// // Remember - one request, one response!
//     console.log(req.method, req.url, res.statusCode);
//     next();
// })

// app.use("/special", function (req, res, next) {
//     //console.log(req.method, req.url, res.statusCode);
//     console.log('you reached the special area');
// })


