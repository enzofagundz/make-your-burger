const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('../routes/routes');

app.use(routes);

app.listen(3333, () => console.log('Server is running on port 3333 🚀'));