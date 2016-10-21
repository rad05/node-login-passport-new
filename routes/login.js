var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/', function(req, res, next) {
   res.render('login', { title: 'Hello - Please Login To Your Account' });

});

module.exports = router;
