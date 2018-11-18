const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send(
        [
            {
                name: 'user 1',
                age: 10
            },
            {
                name: 'user 2',
                age: 20
            },
            {
                name: 'user 3',
                age: 30
            },

        ]);
});

app.listen(3000);

module.exports.app = app;