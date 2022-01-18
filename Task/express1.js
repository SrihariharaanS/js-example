const express=require('express');

const sampapp=express();
sampapp.get('/',function(req,res){
    res.send('Hello '+req.query.name)
})
sampapp.get('/fr8',function(req,res){
    res.send('Welcome back FR8ian')
})
sampapp.get('/fr8/:id',function(req,res){
    const id=req.params.id
    res.send('FR'+id)
})
sampapp.get('/fr8/:id',function(req,res){
    const id=req.params.id
    res.send('FR'+id)
})


sampapp.listen(3002);