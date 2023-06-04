const mongoose=require("mongoose")

async function getData(){
    try{
        
        await mongoose.connect("mongodb://localhost:27017/testingMulter")
        console.log("Database is connected.....");
    }
    catch(error){
        console.log("Something Wrong while Connecting database!!!!!!");
    }
}

getData()