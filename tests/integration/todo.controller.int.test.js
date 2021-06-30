const request = require('supertest');
const app = require('../../app');
const newTodo = require('../mock-data/new-todo.json');

const endpointUrl = '/todos/';

describe(endpointUrl, () => {
  it(`POST${endpointUrl}`, async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send(newTodo);
    const { statusCode, body } = response;
    
    expect(statusCode).toBe(201);
    expect(body.title).toBe(newTodo.title);
    expect(body.done).toBe(newTodo.done);
  });
});
