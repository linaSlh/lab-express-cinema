// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);
const movieRoutes = require('./routes/movies.routes'); // <== import (require) book routes
app.use('/', movieRoutes);

mongoose.connect('mongodb://localhost:27017/lab-express-cinema')
        .then(() => console.log('Connection to DB successful'))
        .catch(err => console.log(err))

app.set('views', __dirname + `/views`);
app.set('view engine', 'hbs');
app.use(express.json()) 

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
