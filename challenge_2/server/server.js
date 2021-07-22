const express = require('express');
const bodyParser = require('body-parser');


let app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let port = process.env.port || 4000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

