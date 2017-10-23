var express = require('express');
var router = express.Router();
var data = require('../docs/dataset.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');

  // And insert something like this instead:
  res.json(data[0]);
});

module.exports = router;
