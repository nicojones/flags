// var assert = require('assert');
// var app = require('express')();

// var MongoURL = 'mongodb://localhost';
// var MongoClient = require('mongodb').MongoClient;

// module.exports = MongoClient;

// var mongoExpress = require('express-mongo-db');
// var config  = require(global.appRoot + '/config/config');

// var expressMongoDb = require('express-mongo-db');
// app.use(expressMongoDb('mongodb://localhost/test'));

// app.use(mongoExpress(config.MONGO_URL + '/' + config.DATABASE ));

// module.exports.init = function (callback) {
//   var server = new mongodb.Server(config.MONGO_SERVER, config.MONGO_PORT, {});
//   new mongodb.Db(config.DATABASE, server, {w: 1}).open(function (error, client) {
//     //export the client
//     module.exports.db = mongodb;

//     // and maybe some collections as a shortcut
//     // module.exports.myCollection = new mongodb.Collection(client, 'myCollection');
//     callback(error);
//   });
// };

// MongoClient.connect(MongoURL, function (err, db) {
//     if (err) throw err
//     var insertDocuments = function(db, callback) {
//         // Get the documents collection
//         var collection = db.collection('documents');
//         // Insert some documents
//         collection.insertMany([
//             {a : 1}, {a : 2}, {a : 3}
//         ], function(err, result) {
//             console.log("Inserted 3 documents into the document collection");
//             callback(result);
//         });
//     }(db, function(){});

//     db.collection('documents').find().toArray(function (err, result) {
//       if (err) throw err
//       console.log(result)
//     }) 

//     var collection = db.collection('documents');
//     collection.deleteMany({}, function(err, result) {
//         // assert.equal(err, null);
//         // assert.equal(1, result.result.n);
//         console.log("Removed the document with the field a equal to 2");
//     });
// });