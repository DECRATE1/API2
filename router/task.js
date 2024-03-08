const { Router } = require("express")
const { addTask,  allTasks, allUnfinishedTasks } = require("../controllers/task")
const taskRouter = Router()

taskRouter.post("/add", addTask)
taskRouter.get("/all", allTasks)
taskRouter.get("/undone", allUnfinishedTasks)

module.exports = taskRouter;