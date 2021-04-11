const express = require('express')
const app = express()
const cors = require('cors')

// Routes
const index = require('./routes/index');
const babuRoutes = require('./routes/babuRoutes');

app.use(cors())
app.use(express.json({ extended: true }))

app.use(index)
app.use(babuRoutes)

module.exports = app;