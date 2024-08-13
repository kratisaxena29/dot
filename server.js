require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

app.use(cors({
  origin: "*"  
}))

// const MONGODBURI = 'mongodb://127.0.0.1:27017/AwesomeDot'
const MONGODBURI = 'mongodb://admin:6J2UgCqk@3.110.224.141:27017/?authSource=admin'

mongoose.connect(MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

mongoose.set('debug', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Successfully connected to DB");
});

app.use(bodyParser.json());
 app.use(require('./routes'));





let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}..`);
});
