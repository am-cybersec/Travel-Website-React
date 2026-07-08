const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

// POST - Save favorite
router.post('/', async (req, res) => {
  try {
    const fav = new Favorite(req.body);
    await fav.save();
    res.json(fav);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - All favorites
router.get('/', async (req, res) => {
  const favs = await Favorite.find();
  res.json(favs);
});

module.exports = router;