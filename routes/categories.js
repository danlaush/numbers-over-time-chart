var express = require('express');
var router = express.Router();
var data = require('../docs/dataset.json');
console.log(data[0]);

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // res.send('loading category data: ', data);
  res.setHeader('Content-Type', 'application/json');

  // And insert something like this instead:
  res.json(data[0]);
});

module.exports = router;
