const todoModel=require("../model/todoModel")
//crud
const getAllTodos=async(req, res)=>{
    try {
        const todos=await todoModel.find();
        return res.status(200).json({
            message: "Todos retrieved successfully",
            data: todos
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const getOneTodo=async(req, res)=>{
    try {
        const {id}=req.params;
        const todo=await todoModel.findById(id);
        if(!todo){
            return res.status(404).json({message: "Todo not found"});
        }
        return res.status(200).json(
            {
                message: "Todo found",
                data: todo
            }
        );
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const createTodo=async(req, res)=>{
    try {
        const {title, details}=req.body;
        const todo=await todoModel.create({title, details});
        return res.status(201).json({
            message: "Todo created successfully",
            data: todo
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const updateTodo=async(req, res)=>{
    try {
        const {id}=req.params;
        const{completed}=req.body;
        const todo=await todoModel.findByIdAndUpdate(id, {completed:true}, {new: true});
        return res.status(200).json({
            message: "Todo updated successfully",
            data: todo
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

const deleteTodo=async(req, res)=>{
    try {
        const {id}=req.params;
        await todoModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Todo deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
module.exports={
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
};