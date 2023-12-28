const express = require('express');
const app = express();
const PORT = 3001;
const topBooks = require('./routes/topBooks')
const cors = require('cors');

app.use(cors())

app.use('/top-books', topBooks)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);