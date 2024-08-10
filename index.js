const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const catagories = require('./data.json');
const news = require('./news.json');

app.get('/', (req,res) => {
    res.send('Running');
})

app.use(cors());

app.get('/catagories', (req,res) => {
    res.send(catagories);
})

app.get('/news', (req,res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }

})

app.listen(port, () => {
    console.log({ port });
})