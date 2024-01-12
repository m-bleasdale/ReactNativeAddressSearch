const express = require('express');
const { mountRoutes } = require('./src/routes');

const app = express();
const port_dev = 3001;

app.use(express.json());

mountRoutes(app);

app.listen(port_dev, () => console.log(`Carshare backend API listening at http://localhost:${port_dev}`));

