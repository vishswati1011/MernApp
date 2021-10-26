// const express =require('express');
import express from 'express'
import './db/conn.js';               //connect with databases
import './models/students.js'        //connect with schema
import Student from './models/students.js';
const app =express();
const port =process.env.PORT || 4000;

app.use(express.json())  //this methed is use for get request in json 

// create a new student  
//post reqest using                        
// app.post('/students',(req,res)=>{

//     // we are having these below object inside req
//     // const user=new  Student({
//     //         "name":"swati vishwakarma",
//     //         "email":"swati@gmail.com",
//     //         "phone":8457123654,
//     //         "address":"Indore"   
//     // })
//     console.log(req.body);
//     const user=new  Student(req.body);
//     //promise example
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })          
// })

//post reqest using async await 
app.post('/students',async(req,res)=>{

    try{
        const user = new  Student(req.body);  
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
       
    }
})


app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
});
