const express = require('express');

let app = express();

app.use(express.static(__dirname + './../public'));
app.use(express.json());


let port = process.env.port || 4000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

