const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/api', orderRoutes);

const PORT = 3003;


app.get('/', (req, res) => {
  res.send('Order Service is running!');
});

app.get('/orders', (req, res) => {
  res.send('Welcome to Order Service');
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
