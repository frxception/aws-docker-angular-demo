const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./routes/api');

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', api);

// _GET port from environment & store in express:
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`App up & running on port ${port}`));