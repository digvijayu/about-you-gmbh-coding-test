const express = require('express');
const expressStatusMonitor = require('express-status-monitor');

const CONST = require('./constants');
const homeController = require('./controllers/home');
const apiController = require('./controllers/api');
const categoriesController = require('./controllers/api/categories');
const productsController = require('./controllers/api/products');
const { logger } = require('./utils/logger');
const utils = require('./utils');

// get env config
require('dotenv').config({ path: utils.getEnvironmentVariableFilePath() });

const app = express();
const port = process.env.NODE_PORT || 3000;

// Declare static folder
app.use(
  expressStatusMonitor({
    healthChecks: [
      {
        protocol: 'http',
        host: 'localhost',
        path: '',
        port: port
      },
      {
        protocol: 'http',
        host: 'localhost',
        path: '/random',
        port: port
      }
    ]
  })
);

app.use(express.static(process.env.BUILD_DIR));
app.get('/', homeController.index);
app.get('/api', apiController.index);
app.get('/api/products', productsController.index);
app.get('/api/categories', categoriesController.index);

module.exports = app;
