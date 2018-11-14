const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome Home'
    });
    //res.send('<h1>Hello Express !</h>');
    /*  res.send({
         name: 'test',
         like: [
             'like 1',
             'like 2'
         ]
     }); */
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Server Is Up On Port 3000');
});