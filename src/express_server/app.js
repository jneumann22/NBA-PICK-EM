
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')

const PORT = 1122;

const app = express();

app.use(parser());
app.use(parser.urlencoded({extended: true}));

app.use(cors())

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, (err) => {
    if (err) {
      console.log('error listening on port', PORT, err);
    } else {
      console.log('successfully listening on port,', PORT);
    }
  });