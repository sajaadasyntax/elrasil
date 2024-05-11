const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require('./middlewares/errors');

mongoose.Promise = global.Promise;

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
app.use('/uploads',express.static('uploads'));
app.use('/api', require("./routes/app.routes"));
app.use(errors.errorHandler);

app.listen(process.env.PORT || 4000, function () {
    console.log("Server is running on port 4000");
});