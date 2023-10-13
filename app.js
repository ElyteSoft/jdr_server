const express = require('express');
const app = express();
const routes = require('./routes/');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

console.log(process.env.DATABASE_URL_DEV);

app.use('/', routes);

app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

