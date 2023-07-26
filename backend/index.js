const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.listen(3333, () => console.log('Server is running on port 3333 🚀'));