const express = require('express');
const axios = require('axios');
const moment = require('moment');

let app = express();

app.use(express.static(__dirname + './../public'));
app.use(express.json());
var startDate = moment().subtract(180, 'days').format('YYYY-MM-DD');
var endDate = moment().format('YYYY-MM-DD');

app.get('/priceData', (req, res) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
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


  // 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-06-30')