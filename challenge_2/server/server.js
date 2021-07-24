const express = require('express');
const axios = require('axios');

let app = express();

app.use(express.static(__dirname + './../public'));
app.use(express.json());

app.get('/priceData', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-06-30')
  .then((response) => {
   res.send(response.data).status(200);
 })
 .catch((error) => {
   console.log(error);
 });
})

let port = process.env.port || 4000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

