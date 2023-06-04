const express=require("express")
const fileController = require("../controllers/fileController")
const upload= require("../middleware/multer")

const router=express.Router()

// router.post("/uploadImage",upload.single("file"),fileController)   

// router.post("/uploadImage",upload.fields(
//     [
//         { name: 'pic1', maxCount: 1 },
//         { name: 'pic2', maxCount: 1 },
//     ]
// ),fileController) 

router.post("/uploadImage",fileController) 


module.exports=router