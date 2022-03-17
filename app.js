const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoConnect = require('./util/database');
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

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("I hear ya");
});

//////////////
// MENU GET AND POST
/////////////

app.get('/api/menu', (req, res) => {
  client.connect(err => {
    const collection = client.db("Le-Gros-Appetit").collection("menu");

    collection.find().toArray((error, documents) => {
      if (error) {
        throw error;
      }
      res.send(documents);
    });
  });

});

app.post('/api/menu', (req, res) => {
  client.connect(err => {
    const collection = client.db("Le-Gros-Appetit").collection("menu");
    collection.insertOne(req.body, (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.insertedId);
    });
  });
});


//////////////
// STAFF GET AND POST
/////////////

app.get('/api/staff', (req, res) => {
  client.connect(err => {
    const collection = client.db("Le-Gros-Appetit").collection("staff");

    collection.find().toArray((error, documents) => {
      if (error) {
        throw error;
      }
      res.send(documents);
    });
  });

});

app.post('/api/staff', (req, res) => {
  client.connect(err => {
    const collection = client.db("Le-Gros-Appetit").collection("staff");
    collection.insertOne(req.body, (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.insertedId);
    });
  });
});

/////////////////////

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