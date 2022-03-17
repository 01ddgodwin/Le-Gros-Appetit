const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

const PORT = process.env.PORT || 8080;
//mongoose.connect('mongodb+srv://dillon:bob112172@le-gros-appetit.xibg7.mongodb.net/test?authSource=admin&replicaSet=atlas-qwuacs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
//.then(result => {
  app.listen(PORT, () => {
    console.warn(`App listening on http://localhost:${PORT}`);
  });
//})
//.catch(err => console.log(err));