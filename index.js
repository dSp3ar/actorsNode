const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is listening!');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/actors/:actor', (req, res) => {
    console.log(req.params);
    res.send('actors!');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.post('/', (req, res) => {
    console.log('1', req.query);
});

