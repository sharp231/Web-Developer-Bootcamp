const express = require('express')
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}!`)
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'Vishal');
    res.cookie('animal', 'cat');
    res.send('Cookie set!')
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('Cookie set!')
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log('listening on port 3000!')
})