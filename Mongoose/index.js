const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected OK');
  })
  .catch(err => {
    console.log('Error connecting ');
    console.log(err);

  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const Matrix = new Movie({ title: 'Matrix', year: 1999, score: 9.2, rating: 'R' })

// Movie.insertMany([
//   { title: 'Matrix', year: 2001, score: 8.2, rating: 'R' },
//   { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//   { title: 'Gian', year: 1999, score: 7.5, rating: 'PG' },
//   { title: 'Stand', year: 1986, score: 8.6, rating: 'R' },
//   { title: 'Kingdom', year: 2012, score: 7.2, rating: 'PG-13' },
// ]).then(data => {
//   console.log('OK');
//   console.log(data);
// });
