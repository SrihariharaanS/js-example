const express=require('express');

const sampapp=express();

sampapp.use(express.json())
sampapp.use(express.urlencoded({extended:false}))

sampapp.get('/',function(req,res){
    res.send('hello '+req.query.name)
})
sampapp.post('/hello',function(req,res){
    console.log(req.body.name)
    res.json({OUTPUT : req.body.name})
})

sampapp.listen(4005);