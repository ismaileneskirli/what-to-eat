const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const middlewares = require('./API/middlewares/middlewares');
const api = require('./API');

const app = express();
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Recipes API 🍔🍕🌭🍽🍳',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// main seperation purpose is testing the api
module.exports = app;
