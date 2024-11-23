const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = { secret: 'mysecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));
app.use(flash());

const Farm = require('./models/farm');
// const { session } = require('inspector');

mongoose.connect('mongodb://localhost:27017/flash', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected OK');
    })
    .catch(err => {
        console.log('MongoDB Error connecting ');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.message = req.flash('success');
    next();
});

//farm
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', async (req, res) => {
    res.render('farms/new');
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully created a new farm');
    res.redirect('/farms');
});

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    res.render('farms/show', { farm });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});