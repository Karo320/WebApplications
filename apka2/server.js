const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World");
});

//const heroRoutes = require('./src/routes/hero.routes')
const heroRoutes = require('./routes/hero.routes')

app.use('/api/v1/heroes', heroRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

