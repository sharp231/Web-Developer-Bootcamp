const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected OK');
    })
    .catch(err => {
        console.log('MongoDB Error connecting ');
        console.log(err);
    });

// const p = new Product({ name: 'banana', price: 199, category: 'fruit' });

// p.save().then(p => {
//     console.log(p);
// }).catch(e => {
//     console.log(e);
// });

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 98,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 480,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 380,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 198,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 298,
        category: 'dairy'
    },
];

Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});