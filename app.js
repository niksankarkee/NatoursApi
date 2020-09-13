const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config();

app.use('/', (req, res, next) => {
    res.status(200).send('Hello from the server side!');
})





app.listen(process.env.PORT, () => {
    console.log(process.env.PORT, ' listining');
})