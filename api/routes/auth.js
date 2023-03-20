const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {
  // implement registration
  res.send('this is the register route');
});

router.post('/login', (req, res) => {
  // implement login
  res.send('this is the login route');
});

module.exports = router;
