const multer  = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
// //   const upload = multer({ storage: storage })
//     const upload = multer([{name: 'pic1', maxCount: 1},{name: 'pic2', maxCount: 1}])
// module.exports=upload



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })

//   module.exports=upload


const util = require("util");
const Multer = require("multer");


let processFile = Multer({
  storage: Multer.memoryStorage()
}).fields([{ name: 'pic1' }, {name: "pic2", maxCount: 1}]);

let processProfileFileMiddleware = util.promisify(processFile);


module.exports =processProfileFileMiddleware ;