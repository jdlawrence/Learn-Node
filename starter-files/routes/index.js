const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const obj = {name: 'Smooth'};
  res.send(req.query);
  // res.send('Hey! It works!');
});

module.exports = router;
