const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

app.use(volleyball);

app.listen(3000, function(){
	console.log("Listening on port 3000!")
})

// app.use('/', function (req, res, next) {
//   console.log(req.method, req.url, res.statusCode)
//   next();
// })

// app.use('/special/', function (req, res, next) {
//   console.log(req.method, req.url, res.statusCode)
//   console.log("You entered a special zone!")
//   next();
// })

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});