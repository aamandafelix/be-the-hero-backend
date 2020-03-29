const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json({
        mensagem: 'Hello World',
        dev: 'Amanda Bezerra'
    });
});

module.exports = routes;