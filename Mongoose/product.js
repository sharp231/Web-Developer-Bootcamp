const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected OK');
    })
    .catch(err => {
        console.log('Error connecting ');
        console.log(err);

    });
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },

});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'マウンテンバイク', price: 99800, color: 'red' });

bike.save()
    .then(data => {
        console.log('OK');
        console.log(data);
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });