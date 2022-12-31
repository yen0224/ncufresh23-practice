var express = require('express');
var router = express.Router();

/* GET / return 200 ok */
router.get('/', function(req, res, next) {
  res.send('ok');
});

module.exports = router;
