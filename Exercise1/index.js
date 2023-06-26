const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

require('./config/db')();
app.listen(process.env.PORT || 3001, () => console.log('App on http://localhost:3001'))