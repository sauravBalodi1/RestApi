const express=require('express')

const Student=require('./models/students')
const app=express()
const port=process.env.PORT || 7000
require("./db/conn")


app.use(express.json())
app.delete("/students/:id",async(req,res)=>{
try{
      //const _id=req.params.id
      const deleteStudent=await Student.findIdAndDelete(req.params.id)
      if(!req.params.id)
      {
         return  res.status(400).send()
      }console.log(req.params.id)
          res.send(deleteStudent)
}
catch(e)
{
    res.status(500).send(e)
}
})

app.listen(port,()=>{
    console.log(`the connection has been established at ${port}`)
})
