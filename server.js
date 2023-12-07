const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/VideoPlayerInfoApi');


const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
  next();
});
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/SahosoftVideoDB', {
  useNewUrlParser: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
