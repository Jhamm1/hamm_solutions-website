import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import axios from 'axios';

const ERROR_MSG = require("./constants/errors");

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

const withDB = async(operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        await operations(db);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}


app.get('/api/contact', async(req, res) => {
    // var testBody = { "service": "test" };
    // res.status(200).json(testBody);

    console.log(req.body);

    axios.post('https://reqres.in/api/users', req.body)
        // axios.post('http://localhost:3300/nn', req.body)
        .then(function(response) {
            console.log(response);
            res.status(200).json(response.data);
        })
        .catch(function(error) {
            console.log(error);

            const error_res = { code: ERROR_MSG.ERRORS.SERVICE_NO_RUNNING, message: error.message };
            res.status(400).json(error_res);
        });
})


// endpoint to call the outbound communication service
app.post('/api/outboundcommunication', (req, res) => {

    console.log(req.body);

    axios.post('https://reqres.in/api/users', req.body)
        // axios.post('http://localhost:3300/nn', req.body)
        .then(function(response) {
            console.log(response);
            res.status(200).json(response.data);
        })
        .catch(function(error) {
            console.log(error);

            const error_res = { code: ERROR_MSG.ERRORS.SERVICE_NO_RUNNING, message: error.message };
            res.status(400).json(error_res);
        });

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));