const express = require("express")
const cors = require("cors")
const taskRouter = require("./router/task")
const { connect } = require("mongoose")


const app = express()
app.use(cors())
app.use(express.json())


app.use("/tasks", taskRouter)


async function main(){
    try{
        await connect("mongodb://127.0.0.1:27017/task")
        app.listen(3000);
        console.log("...")
    }
    catch(err){
        return err
    }
}

main()


process.on("SIGINT", async() => {
      
    await disconnect();
    console.log("Приложение завершило работу");
    process.exit();

});