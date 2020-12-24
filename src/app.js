const express=require('express')

const Student=require('./models/students')
const app=express()
const port=process.env.PORT || 9000
require("./db/conn")
// app.get("/",(req,res)=>{
//     res.send("the response has been send")
//     })

app.use(express.json())//this is basically a middleware,for POST requests
//CREATE STUDENTS


// app.post("/students",(req,res)=>{
//     const user=new Student(req.body)
   
//     user.save().then(()=>{res.status(201).send(user)}).catch((err)=>{res.status(400).send(err)})//storing the data in the database
//   console.log(req.body)
//    // res.send("the response has been send")
// })



app.post('/students',async (req,res)=>{
try{
const user=new Student(req.body)
         const CreateUser=await user.save()
         res.status(201).send(CreateUser)
         console.log(req.body)
}

catch{
res.status(400).send(CreateUser)
}
})
app.listen(port,()=>{
    console.log(`the connection has been established at ${port}`)
})
