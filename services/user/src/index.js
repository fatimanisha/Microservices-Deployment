const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('User Service is running!');
  });

app.get('/users', (req, res) => {
    res.send('Welcome to User Service');
  });
  
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});