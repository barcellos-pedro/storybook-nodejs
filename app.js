require('dotenv').config({ path: './config/config.env' });

const { connectDB } = require('./config/db');
const { engine } = require('express-handlebars');
const errorHandler = require('./middlewares/error');
const indexRoutes = require('./routes/index');
const morgan = require('morgan');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

connectDB();

// Logger for development
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Set up template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/', indexRoutes);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port: ${PORT}`)
);
