const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log(err);
        return console.log('Unable to connect to db');
    }

    const db = client.db('ToDoApp');

    console.log('Connected to db!');

    /* db.collection('Todos').deleteMany({text: 'Eat'}).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').deleteMany({name: 'John'});

    db.collection('Users').findOneAndDelete(
        { _id : new ObjectId("5c1e136e4fae45853aca2f54")}
    ).then((result) => {
        console.log(result);
    })

    //client.close();
});