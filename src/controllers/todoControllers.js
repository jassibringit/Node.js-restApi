import mongoose from "mongoose";
import { TodoSchema } from "../models/todoModels";


const handleAction = (res) => (err,todo) => 
  err ? res.send(err) : res.json(todo) ;

const Todo = mongoose.model("Todo", TodoSchema);

export const addNewTodo = (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save( handleAction(res) );
}  

export const getTodos = (req, res) => {
  Todo.find({} , handleAction(res) ); 
};

export const getTodoWithID = (req, res) =>{
  Todo.findById(req.params.todoId, handleAction(res) ); 
}
