const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'))

// router.get('/stylesheets/style.css', function(req, res, next) {
//   res.sendFile('c:/cygwin64/home/owner/twitter-js/public/stylesheets/style.css');
// });

module.exports = router;