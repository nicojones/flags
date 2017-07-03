var userService = {
    saveUser: function (db, userInfo, callback) {
        db.collection('users').insertOne(userInfo, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("New user '" + userInfo.name + "' created");
            callback(result);
        });
    },

    getUser: function (db, info, callback) {
        db.collection('users').findOne(info, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    getUsers: function (db, callback) {
        db.collection('users').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    // mongo.myCollection.insert({test: 'obj'}, {safe:true}, function(err, objects) {
    // if (err)
        // console.warn(err.message);
  // });
}

module.exports = userService;