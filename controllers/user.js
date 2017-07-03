var express = require('express')();
var User = require(appRoot + '/models/user');

var userController = {
    signup: function (info, req, res) {
        User.getUsers(req.db, function(result) {
            console.log(result);
        });
        if (info.password !== info.confirm) {
            res.send('passwords don\'t match');
        }
        User.saveUser(req.db, {
            name: info.name,
            email: info.email,
            password: 'encrypted' + info.password,
            salt: 'encrypted',
            user_since: new Date(),
          }, function(result) {
              console.log('new insert: ', result.insertedCount, result.insertedId)
              res.redirect(req.baseUrl + '/signup?success=1');
          });
    },

    login: function (info, req, res) {
        User.getUser(req.db, {email: info.email, password: info.password}, function (result) {
            if (!result) {
                console.log("no user for: ", info.email, info.password)
                res.redirect(req.baseUrl + '/' + '?error=wrong_credentials')
            } else {
                console.log('Found user:', result);
                res.redirect('/')
            }
        });
    },

    listUsers: function (req, callback) {
        return User.getUsers(req.db, function(result) {
            callback(result);
        });
    }
}

module.exports = userController