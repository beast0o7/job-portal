require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const routerIndex= require('./routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
 

app.use(express.json({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const swaggerOptions = {
 swaggerDefinition:{
  info: {
    swagger: '1.0',
    title: 'JOB PORTAL',
    description: 'Job Portal APIs',
  },
  basePath: '/api',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
 },
 
 apis:['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

app.use('/api', routerIndex);

app.use((req, res) => {
    res.status(404).json({
        message: "URL not found"
    });
});

module.exports = app;
