const express=require("express")
require("./db/conn")
const MensRanking=require("./models/mens")
const router=new express.Router()

router.get("/",async(req,res)=>{
    res.send("dsds")
})
router.post("/mens",async(req,res)=>{
    try{
          const AddingRecords=new MensRanking(req.body)
          console.log(req.body)
      const insertMen=await  AddingRecords.save()
       res.status(201).save(insertMen)
    }
    catch(e){
       res.status(400).send(e)
    }
})

router.get("/mens",async(req,res)=>{
    try{
          const getMens=await MensRanking.find({}).sort({"ranking":1})
       res.send(getMens)
    }
    catch(e){
       res.status(400).send(e)
    }
})

router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id
          const getMens=await MensRanking.find({_id})
       res.send(getMens)
    }
    catch(e){
       res.status(400).send(e)
    }
})


router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id
          const getMens=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})
       res.send(getMens)
    }
    catch(e){
       res.status(500).send(e)//server error 500
    }
})

router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id
          const getMens=await MensRanking.findByIdAndDelete(_id)
       res.send(getMens)
    }
    catch(e){
       res.status(500).send(e)//server error 500
    }
})
module.exports=router