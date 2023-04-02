const mongoose = require('mongoose');
const dbname="mernoctwss10";
const dbUrl=`mongodb+srv://arpita:arpita@cluster0.y6okcag.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//asynchronous function- return promise
mongoose.connect(dbUrl)
.then((result) => {
    //then will be executed when connection is successfull
console.log('db connected');
})
.catch((err) => {
    //catch will be executed on faliure
    console.log(err);
});
module.exports=mongoose;