const express = require("express")
const cors = require("cors")
const taskRouter = require("./router/task")
const { connect } = require("http2")


const app = express()
app.use(express.json())
app.use(cors())


app.use("/tasks", taskRouter)


async function main(){
    try{
        await connect("mongodb://127.0.0.1:27017/task")
        app.listen(3005);
        console.log("...")
    }
    catch(err){
        return err
    }
}

main()