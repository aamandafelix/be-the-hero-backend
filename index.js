const express = require('express');

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.json({
        mensagem: 'Hello World',
        dev: 'Amanda Bezerra'
    });
});

app.listen(3333);