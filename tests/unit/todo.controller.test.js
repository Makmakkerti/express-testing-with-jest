const httpMocks = require('node-mocks-http');
const TodoController = require('../../controllers/todo.controller');
const TodoModel = require('../../models/todo.model');
const newTodo = require('../mock-data/new-todo.json');

// Mock mongoose function for test
TodoModel.create = jest.fn();

let req;
let res;
let next;

// Runs before each test
beforeEach(() => {
  // In order to reuse and not to duplicate in each test
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe('TodoController.createTodo', () => {
  beforeEach(() => {
    req.body = newTodo;
  });

  // Test that function exists
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });
  // Test that function called with correct param
  it('should call Model.create with newTodo param', () => {
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
  // Test that response code is correct
  it('Sholud return 201 response code', () => {
    TodoController.createTodo(req, res, next);
    // To check response code
    expect(res.statusCode).toBe(201);
    // To check that response sent
    expect(res._isEndCalled()).toBeTruthy();
  });
  // Test that JSON document returned
  it('Should return JSON data', () => {
    // Creating mock return value from model
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});
