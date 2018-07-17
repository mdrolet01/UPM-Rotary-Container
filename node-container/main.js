// Adding libraries
const express = require('express');
var path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://" + process.env.MONGODB_URL +":"+ process.env.MONGODB_PORT +"/";
var dbo;

// Defining Port number to start the web server
const app = express();
const PORT = 8000;
const HOST = '0.0.0.0';

// Connect with MongoDB Database
MongoClient.connect(url, function(err, client) {
    if (err) {
    console.log("Unable to connect with MongoDB")
    throw  err
    }
    else{
    console.log("Connected successfully to MongoDB server");
    dbo = client.db("mqtt");
    }
    });

// Open the Get request to listen to Web Server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    });

// API for viewing sensor data
app.get('/data', (req, res) => {
    dbo.collection('sensor_data').findOne({},{sort:[['_id',-1]]},function (findErr, result) {
        res.send(result);
        });
    });

// API for posting sensor data
app.use(express.json()); // needed for parsing request body
app.post('/data', (req, res) => {
    dbo.collection('sensor_data').insert(req.body)
    res.send("Success: " + req.body);
    });

// Start Web Server
app.listen(PORT, HOST);
console.log(`The Web server running on http://${HOST}:${PORT}`);
