const express = require('express');
const app = express();

// allows cross origin resource sharing
const cors = require('cors');
app.use(cors());

// configure database connection
const mongoose = require('mongoose');
const dbUrl = require('./res/config/dbConfig');

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// make sure that the connection has been established
mongoose.connection.once(('open'), () => {
  console.log('connected to the database!');
});

const ProductQueries = require('./res/dbQueries/products');

app.get('/', (req, res) => {
  const test = [
    { id: 1, name: 'meme' },
    { id: 3, name: 'second thing ' }
  ]
  res.json(test);
})
app.get('/api/products', async (req, res) => {
  const products = await ProductQueries.getRandomProducts(10);
  res.json(products);
})
app.get('/api/t-shirts', async (req, res) => {
  const tshirts = await ProductQueries.getAllTShirts();
  res.json(tshirts);
})
app.get('/api/pants', async (req, res) => {
  const pants = await ProductQueries.getAllPants();
  res.json(pants);
})
app.get('/api/hoodies', async (req, res) => {
  const hoodies = await ProductQueries.getAllHoodies();
  res.json(hoodies);
})
app.get('/api/suits', async (req, res) => {
  const suits = await ProductQueries.getAllSuits();
  res.json(suits);
})
app.get('/api/underwear', async (req, res) => {
  const underwear = await ProductQueries.getAllUnderwear();
  res.json(underwear);
})
app.get('/api/socks', async (req, res) => {
  const socks = await ProductQueries.getAllSocks();
  res.json(socks);
})
app.get('/api/accessories', async (req, res) => {
  const accessories = await ProductQueries.getAllAccessories();
  res.json(accessories);
})
app.get('/api/cart', (req, res) => {
  const test = [
    { id: 2, name: 'test' }
  ]
  res.json(test);
})

app.listen(5000, () => {
  {
    console.log("Listening");
  }
})