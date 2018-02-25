import mongoose from "mongoose";
import { TodoSchema } from "../models/todoModels";

const Todo = mongoose.model("Todo", TodoSchema)

export const addNewTodo = (req, res) => {
  let newTodo = new Todo(req.body);

  newTodo.save((err, todo) => {
    if(err){
      res.send(err);
    }
    res.json(todo);
  })
};

export const getTodos = (req, res) => {
  Todo.find({} , (err, todo) => {
      if(err){
        res.send(err);
      }
      res.json(todo);
  });
};

export const getTodoWithID = (req, res) =>{
  Todo.findById(req.params.todoId, (err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
  });
}
