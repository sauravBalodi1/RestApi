const express=require("express")
const app=express()
require("./db/conn")
const MensRanking=require("./models/mens")
const port =process.env.PORT||11000//if hosted online then this will work

const router=require('./expressRouter')
app.use(express.json())

app.use(router)
app.listen(port,()=>{
    console.log("connection is established at:"+ port)
})