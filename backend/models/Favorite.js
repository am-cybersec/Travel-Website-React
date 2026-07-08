const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  name: String,
  price: String,
  img: String,
});

module.exports = mongoose.model('Favorite', favoriteSchema);