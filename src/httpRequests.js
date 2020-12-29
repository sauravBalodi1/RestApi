const express=require('express')

const Student=require('./models/students')
const app=express()
const port=process.env.PORT || 10000
require("./db/conn")

const router=require("./expressRouter")
app.use(express.json())
app.use(router)
app.listen(port,()=>{
    console.log(`the connection has been established at ${port}`)
})
//this is my main file
