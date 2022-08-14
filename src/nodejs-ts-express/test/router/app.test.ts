// const request = require('supertest');
import request from 'supertest';
import app from '../../src/router/app';

describe('Test for router/app.ts', () => {
  describe('Integration Test', () => {
    test('GET method for /', () => {
      return request(app)
        .get('/')
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });

    test('GET method for /sum', () => {
      return request(app)
        .get('/sum')
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
  });
});
