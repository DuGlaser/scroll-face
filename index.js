const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/views'));
express.static.mime.define({ 'image/svg+xml': ['html'] });

app.get('/', (req, res) => {
  res.end('scroll-face');
});

app.listen(8080);
