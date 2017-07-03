var express = require('express');
var router = express.Router();
var app = express();

// predicate the router with a check and bail out when needed
// router.use(function (req, res, next) {
//     if (!req.headers['x-auth']) {
//         return next('router')
//     }
//     next()
// })
  router.get('/', function (req, res) {
    console.log(req.get);
    res.send('hello, user!')
})
  // use the router and 401 anything falling through
  app.use('/admin', router, function (req, res) {
    res.sendStatus(401)
})

  module.exports = router;