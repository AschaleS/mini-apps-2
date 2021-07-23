const express = require('express');
const request = require('request');

let app = express();

app.use(express.static(__dirname + './../public'));
app.use(express.json());

app.get('/priceData', (req, res) => {
 request('https://api.coindesk.com/v1/bpi/historical/close.json', (err, result) => {
   if(err) {
     res.send(err).status(500);
     console.log(err)
   } else {
     res.send(result.body)
     console.log(result.body)
   }
 })
})

let port = process.env.port || 4000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

