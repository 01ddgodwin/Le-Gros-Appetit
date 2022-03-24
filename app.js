require('dotenv').config()

import express, { json } from 'express';
const app = express();

import swaggerJsDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
//const swaggerAutogen = require('swagger-autogen')();
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Le Gros Appetit API',
      description: 'API Information',
      contact: {
        name: 'Dillon Godwin'
      },
      servers: ['https://localhost:8080/']
      //servers: ["https://le-gros-appetit.herokuapp.com/"]
    },
    tags: [
      {
        name: 'Menu'
      },
      {
        name: 'Staff'
      }
    ]
  },
  apis: ['app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use('/api-docs', serve, setup(swaggerDocs));


import { json as _json, urlencoded } from 'body-parser';
import { connect, connection } from 'mongoose';
import mongoConnect from '../util/database.js';
import bcrypt from 'bcrypt';
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://dillon:bob112172@le-gros-appetit.xibg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

import feedRoutes from './routes/feed';

connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected To Database'));

app.use(json());

import menuRouter from './routes/menu';
// Getting All Menu Items
/**
 * @swagger
 * /menu:
 *  get:
 *      tags:
 *      - "Menu"
 *      description: Use to request all menu items
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */

//Get Menu Item By Id
/**
 * @swagger
 * /menu/{id}:
 *  get:
 *      tags:
 *      - "Menu"
 *      description: Use to request one menu item by id
 *      parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */


// Create Menu Item
/**
 * @swagger
 * /menu:
 *  post:
 *      tags:
 *      - "Menu"
 *      description: Create a new menu item
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *      responses: 
 *          '200':
 *              description: Created
 *          '400':
 *              description: Error
 */

// Update Menu Item
/**
 * @swagger
 * /menu/{id}:
 *  patch:
 *      tags:
 *      - "Menu"
 *      description: Use to request all menu items
 *      parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *      - in: body
 *        name: body
 *        required: true
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */

// Delete Menu Item
/**
 * @swagger
 * /menu/{id}:
 *  delete:
 *      tags:
 *      - "Menu"
 *      description: Use to delete menu item
 *      parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */
app.use('/menu', menuRouter);

import staffRouter from './routes/staff';
// Getting All Staff
/**
 * @swagger
 * /staff:
 *  get:
 *      tags:
 *      - "Staff"
 *      description: Use to request all staff employees
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */

//Get Employee By Id
/**
 * @swagger
 * /staff/{id}:
 *  get:
 *      tags:
 *      - "Staff"
 *      description: Use to request one employee item by id
 *      parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */

// Create Employee
/**
 * @swagger
 * /staff:
 *  post:
 *      tags:
 *      - "Staff"
 *      description: Create a new employee
 *      parameters:
 *      - in: "body"
 *        name: "body"
 *      responses: 
 *          '200':
 *              description: Created
 *          '400':
 *              description: Error
 */

// Update Employee
/**
 * @swagger
 * /staff/{id}:
 *  patch:
 *      tags:
 *      - "Staff"
 *      description: Use to request all employees
 *      parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *      - in: body
 *        name: body
 *        required: true
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */

// Delete Staff Item
/**
 * @swagger
 * /staff/{id}:
 *  delete:
 *      tags:
 *      - "Staff"
 *      description: Use to delete employee
 *      parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *      responses: 
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Error
 */
app.use('/staff', staffRouter);

//app.use(bodyParser.urlencoded());
app.use(_json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(urlencoded({
  extended: true
}));

app.use('/feed', feedRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});