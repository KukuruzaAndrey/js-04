const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/js04api';
MongoClient.connect(url, (err, database) => {
    if (err) {
        return console.log(err);
    }
    exports.db = database;
    console.log("Connected successfully to db");
    require('./routes/routes')(app);
    app.listen(1337, console.log('Server started at 1337 port'));
});

