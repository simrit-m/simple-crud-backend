const express = require('express')
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("connected");
        app.listen(3000, () => {
            console.log('Server is running');
        });
    })
    .catch(() => {
        console.log("not connected");
    })