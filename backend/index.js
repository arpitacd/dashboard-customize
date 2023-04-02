//importing express module
const express = require('express');
const userRouter=require('./routers/userRouter');
const cors= require('cors');


// instializing experss
const app=express();
const port=5000;

//allow cors
app.use(cors({
    origin:['http://localhost:3000']
}));
//json data to js
app.use(express.json());


//using middle ware

app.use('/user', userRouter)
//route
app.get('/',(reqest, respons) => {
    
//send function is used for string response
    respons.send('request accepted')
});

//starting the server
app.listen(port, () => {console.log("express server started")}) ;
