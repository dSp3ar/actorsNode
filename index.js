const express = require('express');
const path = require('path');
let data = require('./data.json');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Server is listening!');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/actors', (req, res) => {
    const actors = data.Actors;
    res.render('actors', { actors });
});

app.get('/actors/:actor', (req, res) => {
    const actors = data.Actors;
    found = false;

    for (let actor of actors) {
        if (actor.surname.toLocaleLowerCase() === req.params.actor) {
            found = true;
            res.render('actor', { actor });
        }
    }
    if (!found) {
        res.render('404');
    }
});

app.get('*', (req, res) => {
    res.render('404');
});

app.post('/data', (req, res) => {
    data.Actors.push(req.body);
    fs.writeFileSync('./data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
    });
    res.render('index');
});

