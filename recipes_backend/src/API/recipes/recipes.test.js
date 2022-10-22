const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/v1/recipes/', () => {
  it('should return a random recipe', async () => {
    const response = await supertest(app)
      .get('/api/v1/recipes')
      .expect('Content-type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });
});
