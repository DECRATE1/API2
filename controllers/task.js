const { ObjectId } = require("bson")
const { Task } = require("../modules/task")

const addTask = async (req, res) => {
    if(!req.body) return res.status(400).json({ error : "Нет данных"})
    const {title} = req.body
    if(title.length === 0){
        res.status(400).json({error : "Нет обязательных данных"})
    }
    const task = new Task({title})
    await task.save()
    return res.status(201).json({message : "Задача создана"})
}


const allTasks = async (req, res) => {
    const tasks = await Task.find()
    return res.status(200).json({tasks})
}


const allUnfinishedTasks = async(req, res) => {
    const unfinishedTask = await Task.find({done : false})
    return res.status(201).json({unfinishedTask})
}

const completeTask = async(req, res) => {
    const { id } = req.body
    const task = await Task.findById(id)
    if(task){
        task.done = true;
        await task.save();
        return res.status(200).json({message : "complete"})
    }
    return res.status(404).json({error : `no task with id ${id}`});
}

module.exports = {
    addTask,
    allTasks,
    allUnfinishedTasks,
    completeTask
}