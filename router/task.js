const { Router } = require("express")
const { addTask,  allTasks, allUnfinishedTasks, completeTask, deleteCompleteTasks, deleteTask } = require("../controllers/task")
const taskRouter = Router()

taskRouter.post("/add", addTask)
taskRouter.post("/complete", completeTask)
taskRouter.get("/all", allTasks)
taskRouter.get("/undone", allUnfinishedTasks)
taskRouter.delete("/delete", deleteCompleteTasks)
taskRouter.deletetask("/deletetask", deleteTask)

module.exports = taskRouter;