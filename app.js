require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoConnect = require('./util/database');
const app = express();
const bcrypt = require('bcrypt')
const {
  MongoClient,
  ServerApiVersion
} = require('mongodb');
const uri = "mongodb+srv://dillon:bob112172@le-gros-appetit.xibg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

const feedRoutes = require('./routes/feed');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected To Database'));

app.use(express.json());

const menuRouter = require('./routes/menu');
app.use('/menu', menuRouter);

const staffRouter = require('./routes/staff');
app.use('/staff', staffRouter);

//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/feed', feedRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});