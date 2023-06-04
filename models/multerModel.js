const mongoose=require("mongoose")

const multerModelSchema=new mongoose.Schema({

   pic1:{
    type:String
   },

   pic2:{
    type:String
   },

   name:{
    type:String
   },

   email:{
      type:String
   },

   age:{
      type:Number
   }

})

const multerModel=new mongoose.model("product",multerModelSchema)
module.exports=multerModel