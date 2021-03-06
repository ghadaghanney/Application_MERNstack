const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./database/db');

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//npm run dev


connectDB();

app.get('/',(req, res) => {
    res.send('Inside server');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));  
