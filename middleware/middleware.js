var express = require('express');
var app = express();

var middleware = function (options) {
    return function (res, req, next) {
        // console.log('running middleware options:', options);
        next();
    }
};

module.exports = middleware;