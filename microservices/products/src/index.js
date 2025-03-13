const express = require('express');
const productRoutes = require('./routes/productsRoutes');

const app = express();
app.use(express.json());

app.use('/api', productRoutes);

const PORT = 3002;
app.get('/', (req, res) => {
  res.send('Product Service is running!');
});

app.get('/products', (req, res) => {
  res.send('Welcome to Product Service');
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});