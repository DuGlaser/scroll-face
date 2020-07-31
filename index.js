const express = require('express');
const app = express();
const Server = require('http').Server;
const server = new Server(app);

app.use('/', express.static(__dirname + '/views'));
express.static.mime.define({ 'image/svg+xml': ['html'] });

server.listen(8080);
