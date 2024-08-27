const express = require('express');
const cors    = require('cors');
require('dotenv').config();
const PORT =process.env.PORT || 5000;
const userRouter = require('./user.route')
const courseRouter = require('./course.route')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRouter);
app.use('/api', courseRouter);


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Express Web Server</h1>");
});

app.listen(PORT,()=>{
    console.log(`Server has started at ${PORT}`);
});
