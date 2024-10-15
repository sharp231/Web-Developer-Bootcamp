const mongoose = require('mongoose');

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

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: false,
            country: String,
            prefecture: String,
            addresse1: String,
            addresse2: String,

        }
    ]
});
const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    });
    u.addresses.push({
        country: 'USA',
        prefecture: 'California',
        addresse1: '123 Sesame St.',
        addresse2: 'Apt 1',

    });
    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            country: 'USA',
            prefecture: 'California',
            addresse1: '456 Sesame St.',
            addresse2: 'Apt 2',
        });
    const res = await user.save();
    console.log(res);
}

addAddress('670d308ea6609b4082113939');