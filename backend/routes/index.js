var express = require('express');
var router = express.Router();
// le module request permet à l'API de pouvoir request une autre API
var request = require('request');
// import les logins sensibles
var login = require("../login.log");


/* GET movieList*/
router.get('/movieList', function(req, res, next) {
  let movieList;
  // Intérroge l'API Movie database
  request(`https://api.themoviedb.org/3/discover/movie?vote_count.lte.gte=5&release_date.lte=2019-01-01&api_key=${login.keyMovieDatabase}&language=fr&region=fr`,
     function(error, response, body) {
       movieList = JSON.parse(body);
       res.json({ movieList: movieList });
  });
});

module.exports = router;
