const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


connectDB();

// const errorHandler = require('./utils/errorHandler')

// app.use(errorHandler)

module.exports = app;