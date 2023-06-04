const express=require("express")
require("./dbConnect")
const routes=require("./routes/route")

const app=express()
app.use(express.json())



app.use("/",routes)

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})