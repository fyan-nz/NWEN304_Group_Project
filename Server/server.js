const express = require('express');
const app = express();

/*TODO: connect to MongoDB and pull information needed for each route 
e.g. when /products is requested pull from the database info about all 
products and return that as a response.


*/
app.get('/', (req, res) => {
  const test = [
    { id: 1, name: 'meme' },
    {id: 3, name: 'second thing '}
  ]
  res.json(test);
})
app.get('/products', (req, res) => {
  const test = [
    { id: 3, name: 'hello' }
  ]
  res.json(test);
})
app.get('/cart', (req, res) => {
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