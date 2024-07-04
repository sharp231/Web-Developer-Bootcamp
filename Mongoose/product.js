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
    name: { type: String, required: true, maxLength: 10 },
    price: { type: Number, required: true, min: [0, 'priceは0より大きい値にしてください'] },
    onsale: { type: Boolean, default: false },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    }
});

// productSchema.methods.greet = function () {
//     console.log('hello');
//     console.log(`- ${this.name}からの呼び出し`)
// }
productSchema.methods.toggleOnsale = function () {
    this.onsale = !this.onsale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onsale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'マウンテンバイク' });
    console.log(foundProduct);
    await foundProduct.toggleOnsale();
    console.log(foundProduct);
    await foundProduct.addCategory('アウトドア');
    console.log(foundProduct);
}
// findProduct();
Product.fireSale().then(msg =>
    console.log(msg)
)
