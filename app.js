const express = require('express');
const app = express();
const routes = require('./routes/');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.options('*', cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
