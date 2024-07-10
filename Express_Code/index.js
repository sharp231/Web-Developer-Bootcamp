const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected OK');
    })
    .catch(err => {
        console.log('MongoDB Error connecting ');
        console.log(err);

    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('wanwan');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});