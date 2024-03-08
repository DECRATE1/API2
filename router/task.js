const { Router } = require("express")
const { addTask,  allTasks, allUnfinishedTasks, completeTask } = require("../controllers/task")
const taskRouter = Router()

taskRouter.post("/add", addTask)
taskRouter.post("/complete", completeTask)
taskRouter.get("/all", allTasks)
taskRouter.get("/undone", allUnfinishedTasks)

module.exports = taskRouter;