const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Cash Rules Everything Around Me, C.R.E.A.M get the money, dolla dolla bill yall'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
