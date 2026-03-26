const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const produitsRouter = require('./routes/produits');
app.use('/produits', produitsRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Four de Tours API - OK'})
});

module.exports = app;