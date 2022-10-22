const supertest = require('supertest');

const app = require('../app');

describe('GET /api/v1/', () => {
  it('should return api v1 message', async () => {
    const response = await supertest(app)
      .get('/api/v1/')
      .expect('Content-type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'Recipes API v1 🍔🍕🌭🍽🍳' });
  });
});
