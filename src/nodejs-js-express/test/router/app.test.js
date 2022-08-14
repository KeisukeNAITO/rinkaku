'use strict';
const request = require('supertest');
const app = require('../../router/app');

describe('Test for router/app.js', () => {
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
