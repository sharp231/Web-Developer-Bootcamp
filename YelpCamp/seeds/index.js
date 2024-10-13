const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log('Mongo Connection Open!')
    })
    .catch(err => {
        console.log('Mongo Connection Error!')
        console.log(err)
    });

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomCityIndex = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 2000) + 1000;
        const camp = new Campground({
            location: `${cities[randomCityIndex].prefecture} ${cities[randomCityIndex].city}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://picsum.photos/seed/picsum/800/800',
            description: '私には、猿股一つで済まして皆なの前に跪く事をあえてしたのだと答えました。私は思案の結果、市におる中学の旧友に頼んで廻らなくっちゃだってお父さんがあの様子じゃ、とても間に合わないかも知れないとも思って、説明しようとすると、むしろ人に羨ましがられる方だったのです。もしいらっしゃるとすれば、奥さんからその日いつもの時刻に超然とした時には誰もいる気色の見えなかった。私はよく海岸の岩の上から見下す水は、またどういう訳かね。しかし父は私の知らなければならなかったのです。',
            price
        });
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});