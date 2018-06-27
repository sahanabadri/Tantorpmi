var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', require('./users'));

router.get('/sairam', function(req, res) {
  res.send('sairam calling');
});


module.exports = router;


 