const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json({status:true,message:"Welcome to the CI/CD learning world"})
})
app.listen(3000);