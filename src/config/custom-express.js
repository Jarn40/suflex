const express = require("express");
const cors = require('cors')
const routes = require('../routes/routes')

const app = express();

app.use(cors())

app.use(express.json({ limit: '50MB', extended:true }));


routes(app)


module.exports = app;