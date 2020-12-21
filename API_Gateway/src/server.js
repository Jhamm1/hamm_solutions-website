import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import axios from 'axios';

require('dotenv').config();

const tracer = require('dd-trace').init();
const ERROR_MSG = require("./constants/errors");

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

// const withDB = async(operations, res) => {
//     try {
//         const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//         const db = client.db('my-blog');

//         await operations(db);

//         client.close();
//     } catch (error) {
//         res.status(500).json({ message: 'Error connecting to db', error });
//     }
// }

// Contact us endpoint
app.post('/api/contact', async(req, res) => {

    console.log("****************************");
    console.log(req.body);
    console.log("****************************");

    axios.post('https://reqres.in/api/users', req.body)
        // axios.post('http://localhost:3300/nn', req.body)
        .then(function(response) {

            console.log(response.data);
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

// subscription endpoint for Hamm solution updates
app.post('/api/subscription-updates', (req, res) => {

    console.log(req.body);

    const resbody = { email: req.body.email };

    res.status(200).json(resbody);

});

//TODO: Schedule consultations


//TODO: Content for the blog




//TODO: Content for the portfolio



//TODO: User registration




//TODO: Login 




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
    res.sendFile(path.join(__dirname + '/.well-known/pki-validation/starfield.html'));
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
    console.log('Press CTRL-C to stop\n');
});