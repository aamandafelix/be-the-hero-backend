const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incidents', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    
    it('should be able to create a new Incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .set('Authorization', '12345678')
            .send({
                title: "Novo caso",
                description: "Esta é a descrição do novo caso",
                value: 200
            });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('id');
    });
});