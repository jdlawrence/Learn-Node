const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: 'Smooth'
  });
});

router.get('/jamil/:a/:b/:c/:d', (req, res) => {
  res.send(req.params);
});

module.exports = router;
