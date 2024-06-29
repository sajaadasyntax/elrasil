const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require('./middlewares/errors');


mongoose.connect(MONGO_DB_CONFIG.DB, {
}).then(
    () => {
        console.log("Connected to DB");
    },
    (error) => {
        console.log("Error connecting to DB");
        console.log(error);
    }
)
app.use(express.json());
app.use(express.urlencoded());
app.use('/uploads',express.static('uploads'));
app.use('/api', require("./routes/app.routes"));
app.use(errors.errorHandler);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.listen(process.env.PORT || 4000, function () {
    console.log("Server is running on port 4000");
});