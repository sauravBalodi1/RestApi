const express=require('express')

const Student=require('./models/students')
const app=express()
const port=process.env.PORT || 7000
require("./db/conn")


app.use(express.json())

app.patch("/students/:id",async(req,res)=>{
    try{
            const _id=req.params.id
            const update=await Student.findByIdAndUpdate(_id,req.body)
             res.send(update)
            // if(!studentDD)
            // {
            //    return res.status(404).send()
            // }
            // else
            // {
            //     res.send(studentDD)
            // }
            
            

    }
    catch(e)
    {
        res.send(e)
    }
})
app.listen(port,()=>{
    console.log(`the connection has been established at ${port}`)
})