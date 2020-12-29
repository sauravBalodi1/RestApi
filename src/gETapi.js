const express=require('express')

const Student=require('./models/students')
const app=express()
const port=process.env.PORT || 7000
require("./db/conn")


app.use(express.json())//this is basically a middleware,for POST requests
//GETTING STUDENTS

app.get('/students',async (req,res)=>{
try{
const StudentsData=await Student.find()
res.send(StudentsData)
}

catch(err){
res.send(err)
}
})

//if you want to get the data by passing the params then do this way
app.get("/students/:id",async(req,res)=>{
    try{
    const _id=req.params.id
    const studentDD=await Student.findById(_id)
    console.log(studentDD)
    if(!studentDD)
    {
       return res.status(404).send()
    }
    else
    {
        res.send(studentDD)
    }
    }
    catch(e)
    {
      res.send(e)
    }
})

app.listen(port,()=>{
    console.log(`the connection has been established at ${port}`)
})
