const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log(err);
        return console.log('Unable to connect to db');
    }

    const db = client.db('ToDoApp');

    console.log('Connected to db!');

    db.collection('Users').find({name: "John"}).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data!', err);
    });

    //client.close();
});