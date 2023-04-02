const express = require('express');
const router= express.Router();
const Model=require('../models/userModel')
// this code is use to add the data
router.post("/add", (req,res)=>{ 
    console.log(req.body);
    //storing data in database
    new Model(req.body).save()
   // res.send("add request on userRouter")
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    res.status(500).json(err);
   });
});
// this code is used to fetch the data
router.get('/getall' ,(req,res) => {
Model.find({})
.then((result) => {
    res.json(result);
}).catch((err) => {
    res.status(500).json(err);
});
})


router.get('/getbyusername/:username',(req,res) => {
    Model.find({username: req.params.username })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})
router.get('/getbyid/:userid',(req,res) =>{
    Model.findById(req.params.userid)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.delete('/delete/:userid',(req,res ) =>{
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.put("/update/:userid", (req,res)=>{ 
   Model.findByIdAndUpdate(req.params.userid, req.body)
   .then((result) => {
    res.json(result)
}).catch((err) => {
    res.status(500).json(err);
});
})
router.get("/delete", (req,res)=>{ res.send("delete request on userRouter")})
module.exports=router;

//create-post,read-get,update-put,delete-delete