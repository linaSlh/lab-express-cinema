// Define all the routes related to the Book model
const router = require('express').Router();
 
const movie = require('../models/movie.model.js'); // <== add this line before your routes
 
// GET route to retrieve and display all the books
router.get('/movies', (req, res, next) => {
  movie.find()
    .then(allTheMoviesFromDB => {
      // -> allTheBooksFromDB is a placeholder, it can be any word
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
 
      res.render('views/movies-list.hbs', { books: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
 
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

// GET route to display the form


// GET route to retrieve and display details of a specific book


router.get('/movies/:movieId', (req, res) => {
  const movieId = req.params.movieId;

  movie.findOne({_id: movieId})
      .then(foundMovie => {
        console.log('foundMovie', foundMovie);
        res.render('views/Movie-details.hbs', foundMovie)
      })
      .catch(err => console.log(err))
 
});
 
module.exports = router;