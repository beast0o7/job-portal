require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const routerIndex= require('./routes')

app.use(express.json({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routerIndex);

app.use((req, res) => {
    res.status(404).json({
        message: "URL not found"
    });
});

module.exports = app;
