const multerModel = require("../models/multerModel")
const processProfileFileMiddleware = require("../middleware/multer")


const fileController = async (req, res) => {

    try {
        // console.log(req.files);
        // console.log("req.files.pic1",req.files.pic1[0].filename);
        await processProfileFileMiddleware(req, res);

        // console.log(req.files);
        // return
        // let data = new multerModel(req.body)

        let { name, email, age } = req.body


        let availableEmail = await multerModel.findOne({ email: email })
        console.log("checkEmail", availableEmail);

        if (!availableEmail) {

             if (req.files.pic1 && req.files.pic2) {
                pic1 = req.files.pic1[0].originalname
                pic2 = req.files.pic2[0].originalname
                console.log("ppppppppppppp",pic1,pic2);

                let data = await multerModel.create({
                    name, email, age, pic1, pic2
                })

                await data.save()
                res.send(data)
            }

            else if (req.files && req.files.pic1) {
                pic1 = req.files.pic1[0].originalname
                console.log("aaaaaaaaa");
                console.log("req.files.pic1[0].originalname", req.files.pic1[0].originalname);

                let data = await multerModel.create({
                    name, email, age, pic1
                })

                await data.save()
                res.send(data)
            }

            else if (req.files && req.files.pic2) {
                console.log("bbbbbbbbbbb");
                pic2 = req.files.pic2[0].originalname
                console.log("req.files.pic2[0].originalnames", req.files.pic2[0].originalnames);

                let data = await multerModel.create({
                    name, email, age, pic2
                })

                await data.save()
                res.send(data)
            }

            else {
                let data = await multerModel.create({
                    name, email, age
                })

                await data.save()
                res.send(data)
            }
            // let data = await multerModel.create({
            //     name, email, age, pic1, pic2
            // })

            // await data.save()
            // res.send(data)
        }
        else if (availableEmail) {
            res.send({
                message: "Email Id is already exists in DB"
            })
        }

        // if (req.files && req.files.pic1)
        //     data.pic1 = req.files.pic1[0].filename
        // if (req.files && req.files.pic2)
        //     data.pic2 = req.files.pic2[0].filename

        // if (req.files && req.files.pic1)
        //     data.pic1 = req.files.pic1[0].originalname
        // if (req.files && req.files.pic2)
        //     data.pic2 = req.files.pic2[0].originalnames

        //     await data.save()
        //     res.send(data)
    }

    catch (error) {
        res.send({
            message: "Fail",
            error: error.message
        })
    }

}

module.exports = fileController