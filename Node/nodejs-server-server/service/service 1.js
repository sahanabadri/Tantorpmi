var async = require('async')

var conf = {
    database: {
        api: 'mongodb',
        host: '127.0.0.1',
        port: '27107',
        schema: 'MEC',
        auth: false,
        username: '',
        password: '',
        url: 'mongodb://127.0.0.1:27017/MEC'
    },
}

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var db

MongoClient.connect(conf.database.url,function(err, client) {
    if(err) {
        console.log(err)
    }
    db = client.db('MEC')
    console.log('Mongo Connected')
});


exports.find = function (criteria,table,callback) {
    db.collection(table).find(criteria).toArray(function(err,data){
       callback(false,data)
    });
};