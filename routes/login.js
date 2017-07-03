var express = require('express');
var router = express.Router();
var app = express();
var controller = require(appRoot + '/controllers/user');

app.route('/')
   .get(function (req, res) {
        res.render('login/login', { title: 'Login'}, false);
    })
   .post(function (req, res) {
        //console.log(req.body);
        controller.login(req.body, req, res);
        //res.end();
   })

app.route('/signup')
   .get(function (req, res) {
        controller.listUsers(req, function(users) {
            res.render('signup', { title: 'Signup', users: users, success: req.query.success === '1'}, false);
        })
    })
   .post(function (req, res) {
        var info = req.body;
        controller.signup(info, req, res);
    });

module.exports = app;