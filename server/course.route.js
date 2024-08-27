const express= require('express');
const courseRouter = express.Router();
const db = require('./db');
const courseModel = require("./course.model");

//post new course
courseRouter.post('/add', async(req,res)=>{
    try {
        const course= new courseModel(req.body);
    await course.save();
    res.status(200).send({
        success:true,
        message:"Succesfully entered new course",
        course})
        
    } catch (error) {
        console.log(error)
    }
})

//edit course
courseRouter.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const updatedCourse = await courseModel.findOneAndUpdate(
            { _id: id },
            req.body, 
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Successfully updated one course",
            updatedCourse
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
});

//delete course
courseRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await courseModel.deleteOne({ _id: id });

        if (result.deletedCount > 0) {
            res.status(200).json({ message: "One course has been deleted" });
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
})


//get all Course data
courseRouter.get('/courselist',(req,res)=>{
    courseModel.find({})
            .exec()
            .then((userInfo)=>{
                res.status(200).json(userInfo);
            })
            .catch((error)=>{
                if(error) res.status(200).json(error);
            });
});
courseRouter.get('/course/:id',(req,res)=>{
    courseModel.findOne({'_id':req.params.id})
            .exec()
            .then((userInfo)=>{
                res.status(200).json(userInfo);
            })
            .catch((error)=>{
                if(error) res.status(200).json(error);
            });
});
module.exports= courseRouter;
console.log('courseRouter is ready to use');