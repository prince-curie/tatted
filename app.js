const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.MONGODB_CONNECTION_STRING;
const port = process.env.APP_PORT;

mongoose.connect(uri);

mongoose.connection.once('open', () => console.log('MongoDB is running.'));

app.listen(port, () => {
    console.log(`App is running at http://127.0.0.1:${port}`);
})
