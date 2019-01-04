const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log(err);
        return console.log('Unable to connect to db');
    }

    const db = client.db('ToDoApp');

    console.log('Connected to db!');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId('5c1d0a40fe871004305dcca7')},
    {
       $set: {
           completed: true
       } 
    }, 
    {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
});