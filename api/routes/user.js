const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from the user router! Would return an array of users');
});

module.exports = router;
