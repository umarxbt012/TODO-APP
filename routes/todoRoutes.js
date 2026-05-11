const express= require('express');
const router=express.Router();
const {getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo}=require("../controller/todoController")
router.get("/todos", getAllTodos);
router.get("/todos/:id", getOneTodo);
router.post("/createTodo", createTodo);
router.patch("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports=router;