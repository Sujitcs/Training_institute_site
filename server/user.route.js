const express= require('express');
const userRouter = express.Router();
const db = require('./db');
const userModel = require("./user.model");
//user list routes
userRouter.get('/list',(req,res)=>{
    userModel.find({})
            .exec()
            .then((userInfo)=>{
                res.status(200).json(userInfo);
            })
            .catch((error)=>{
                if(error) res.status(200).json(error);
            });
});
//Adding signup routes
userRouter.post('/signup', (req, res) => {     
    const { firstname, lastname, email, password, role } = req.body;

    const user1 = new userModel({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        role: role || 'student'
    });

    user1.save()
        .then((userData) => {
            res.status(200).json({
                'message': 'User signup successfully done',
                'submittedData': userData
            });
        })
        .catch((error) => {
            if (error) {
                if (error.keyPattern && error.keyPattern.email) {
                    res.status(200).json({ 'message': 'Email already registered' });
                } else {
                    res.status(200).json({ 'message': error.message || error });
                }
            }
        });
});

userRouter.get('/studentlist', async(req,res)=>{
    try {
        const allStudentData = await userModel.find({ role: 'student' },'firstname lastname email password');
        res.status(200).json(allStudentData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
})
userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email, password });

        if (user) {
            res.status(200).json({
                successful: true,
                role: user.role,
                user: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    
                }
            });
        } else {
            res.status(401).json({
                successful: false,
                message: 'Invalid email or password'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            successful: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
});
//Adding signin routes
// userRouter.post('/signin',(req,res)=>{
//     const password = req.body.password;
//     userModel.findOne({'email':req.body.email})
//     .then((data)=>{
//         if(data && data.password === password)
//         res.status(200).json({'successfull':data});
//     else
//         res.status(200).json('err');
//     })
//     .catch(()=>{ });
// });
//get all student data
// userRouter.delete('/del/:id', async(req,res)=>{
//     try {
//         const allStudentData = await userModel.deleteOne({'_id':req.params.id});
//         res.status(200).json(allStudentData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "Internal Server Error",
//             error: error.message
//         });
//     }
// })

module.exports= userRouter;
console.log('user router is ready to use');
