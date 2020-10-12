const express = require('express');
const app = express();
//Allows express to read json data
app.use(express.json())
const authRoute = require('./client/src/auth')
// allows cross origin resource sharing
const cors = require('cors');
app.use(cors());
//any route coming from auth adds /api to the front 
app.use('/api', authRoute);

// configure database connection
const mongoose = require('mongoose');
const dbUrl = require('./res/config/dbConfig');

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// make sure that the connection has been established
mongoose.connection.once(('open'), () => {
  console.log('connected to the database!');
});

const ProductQueries = require('./res/dbQueries/products');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', async (req, res) => {
  const products = await ProductQueries.getRandomProducts(10);
  res.render('index', { products });
})
app.get('/products/:productType', async (req, res) => {
  let productName = req.params.productType.charAt(0).toUpperCase();
  productName += req.params.productType.slice(1).toLowerCase();
  const products = await ProductQueries.getProductsByType(productName);

  if (products.length > 0) {
    res.render('products', { productType: productName, products });
  } else {
    res.json('no products were found');
  }
})
app.get('/cart', (req, res) => {
  res.render('cart', { items: [] });
})
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/signup', (req, res) => {
  res.render('signup');
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


module.exports = { app, mongoose };