const Task = require('../models/Task')
const createTask = async(req,res)=>{
    try {
        const task = new Task({
            title:req.body.title,
            user:req.user.id
        })
        await task.save()
        res.status(201).json(task)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}
const getTask = async(req,res)=>{
   const tasks = await Task.find({user:req.user.id})
   res.json(tasks)
}
const updateTask = async(req,res)=>{
    try {
       const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    if(!updatedTask){
        return res.status(404).json({message:"Task not found"})
    } 
    res.json(updatedTask)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}
const deleteTask = async(req,res)=>{
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({message:"Task Deleted"})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}
module.exports = {getTask,createTask,updateTask,deleteTask}