const TodoModel = require('../models/todo.model');

exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message)
  }
  
};
