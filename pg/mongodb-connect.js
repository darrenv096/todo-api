const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log(err);
        return console.log('Unable to connect to db');
    }

    const db = client.db('ToDoApp');

    console.log('Connected to db!');

    db.collection('Todos').insertOne({
       text: 'Something todo',
       completed: false
    }, (err, res) => {
        if(err){
            return console.log(`Unable to insert record!`, err);
        }

        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    client.close();
});