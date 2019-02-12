var express = require('express');
var router = express.Router();
// le module request permet à l'API de pouvoir request une autre API
var request = require('request');
// import les donnèes sensibles
var login = require("../login.log");

// return la date d'aujourd'hui au format anglophone
var dateNow = function () {
  let newDate = new Date()
  let year = newDate.getFullYear()
  let month = newDate.getMonth() + 1
  let day = newDate.getDate()
  let date = year + "-" + month + "-" + day
  return date
}


/* GET movieList*/
router.get('/movieList', function(req, res, next) {
  let movieList = []
  let newDate = dateNow()
  // Intérroge l'API Movie database
  request(`https://api.themoviedb.org/3/discover/movie?vote_count.lte.gte=5&release_date.lte=${newDate}&api_key=${login.keyMovieDatabase}&language=fr&region=fr`,
     function(error, response, body) {
       let brut = JSON.parse(body);
       let result = brut.results
       result.map((item) => {
         let movie = {}
         movie.id = item.id
         movie.title = item.title
         movie.overview = item.overview
         movie.img = "https://image.tmdb.org/t/p/w500" + item.poster_path
         movieList.push(movie)
       })
       res.json({ movieList: movieList});
  });
});

// // GET likeMovieList
// router.get('/likemovieList', function(req, res, next) {
//   let likeMovieList;
//   // Intérroge l'API Movie database
//   request(`https://api.themoviedb.org/3/discover/movie?vote_count.lte.gte=5&release_date.lte=${newDate}&api_key=${login.keyMovieDatabase}&language=fr&region=fr`,
//      function(error, response, body) {
//        movieList = JSON.parse(body);
//        res.json({ movieList: movieList });
//   });
// });

module.exports = router;
