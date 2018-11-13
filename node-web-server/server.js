const express = require('express');

var app = express();

app.get('/', (req, res) => {

    //res.send('<h1>Hello Express !</h>');
    res.send({
        name: 'test',
        like: [
            'like 1',
            'like 2'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000);