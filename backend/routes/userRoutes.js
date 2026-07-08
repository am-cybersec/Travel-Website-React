const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST - SignUp
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User saved!', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - All Users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
// PUT - Update user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Delete user
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;