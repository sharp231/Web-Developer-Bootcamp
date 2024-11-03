const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    res.send('Sorry not an admin');
});

router.get('/secret',  (req, res) => {
    res.send('Server is up and running');
});

router.get('/delete',  (req, res) => {
    res.send('Server is up and running1');
});

module.exports = router;