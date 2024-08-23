const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelpcamp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected OK');
    })
    .catch(err => {
        console.log('MongoDB Error connecting ');
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomCttyIndex = Math.floor(Math.random() * cities.length);
        const camp = new Campground({
            location: `${cities[randomCttyIndex].city}${cities[randomCttyIndex].prefecture}`,
            title: `${sample(descriptors)}・${sample(places)}`
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
}); 