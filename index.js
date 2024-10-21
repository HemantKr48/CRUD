const express = require('express');
const mongoose=require('mongoose');
const app = express();
const PORT = 8000;
const userRouter=require('./routes/user');

mongoose.connect('mongodb+srv://hemantkumar48200:Hemant200@cluster0.ulzzhjj.mongodb.net/expressProject').
    then(console.log("mongodb connected")).
    catch(err => console.log(err));

//Middleware
app.use(express.json());
app.use('/api/users',userRouter);



app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

