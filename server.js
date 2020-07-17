const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
express.static.mime.define({ 'image/svg+xml': ['html'] });

app.listen(PORT);
