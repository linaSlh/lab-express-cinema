const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define a schema (blueprint) for the Movie model
const movieSchema = new Schema({
  title : {type : String},
  director: {type : String},
  stars: [String],
  image: {type : String},
  description: {type : String},
  showtimes: [String],
});

// Create a model (constructor function) based on the schema
const Movie = mongoose.model('Movie', movieSchema);

// Export the Movie model to use it in other parts of the application
module.exports = Movie;