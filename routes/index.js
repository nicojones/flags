var express = require('express');
var router = express.Router();
var controller = require(appRoot + '/controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express Coffee'}, false);
});

module.exports = router;
