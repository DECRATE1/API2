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
    res.status(200).json({tasks})
}


const allUnfinishedTasks = async(req, res) => {
    const {done} = req.body
    const unfinishedTask = await Task.findOne({done})
    if(!unfinishedTask){
        res.status(201).json({unfinishedTask})
    }
}

module.exports = {
    addTask,
    allTasks,
    allUnfinishedTasks
}