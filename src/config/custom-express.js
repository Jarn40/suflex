const express = require("express");
const cors = require('cors')
const routes = require('../routes/routes')
const morgan = require('morgan')

const app = express();

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json({ limit: '50MB', extended:true }));


routes(app)


module.exports = app;