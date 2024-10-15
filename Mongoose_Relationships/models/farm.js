const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Mongo Connection Error!')
        console.log(err)
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});



const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {
//         name: 'Tomato',
//         price: 1.99,
//         season: 'Summer'
//     },
//     {
//         name: 'Cucumber',
//         price: 1.99,
//         season: 'Summer'
//     },
//     {
//         name: 'Lettuce',
//         price: 1.99,
//         season: 'Summer'
//     }
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'CA' });
//     const Tomato = await Product.findOne({ name: 'Tomato' });
//     farm.products.push(Tomato);
//     await farm.save();
//     console.log(farm);
// }
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const cucumber = await Product.findOne({ name: 'Cucumber' });
    farm.products.push(cucumber);
    await farm.save();
    console.log(farm);
}
// addProduct();

Farm.findOne({ name: 'Full Belly Farms' }).then(farm => console.log(farm));