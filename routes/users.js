var express = require('express');
var router = express.Router();
var app = express();

var controller = require(appRoot + '/controllers/user');

/* GET users listing. */
app.route('/')
   .get(function(req, res) {
  res.send('respond with a resource');
});

router.get('/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

module.exports = router;
