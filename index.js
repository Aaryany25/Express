const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.end("This is Server Made by using express ")
})
app.get('/contact',function(req,res){
    res.end("This is contact Page Server ")
})
app.post('/tweet',function(req,res){
    res.status(201).end("This is Twwet Page Server ")
})
app.listen(8000,function(){
    console.log("Server is ruuning on port 8000")
})