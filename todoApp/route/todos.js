const express = require("express");
const router=express.Router();

//import controller or function that define in routes
const {createTodo}=require("../controller/createTodo");
const {getTodo,getTodoById}=require("../controller/getTodo");
const {updateTodo}=require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");

//define api routes

router.post("/createtodo",createTodo);//post api request=>db me data add krenge 
router.get("/gettodos",getTodo);//get api request =>fetch data from db
router.get("/gettodos/:id",getTodoById);
router.put("/updatetodo/:id",updateTodo);//put api request =>update in exist data 
router.delete("/deletetodo/:id",deleteTodo);//delete api request =>delete data 

module.exports=router; 