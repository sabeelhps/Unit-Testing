const express = require('express');
const app = express();
const path = require('path');
const { fareInfo,calculateFare } = require('./fareutils');


app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());

app.post('/calcfare', (req, res) => {


    const km = parseFloat(req.body.km);
    const min = parseInt(req.body.min);

    console.log(req.body);

    let Totalfare = calculateFare(km, min);
    console.log(Totalfare);
    
    res.send({ fare: Totalfare });
})

app.get('/rates', (req, res) => {
    res.send(fareInfo);
})


module.exports = app;