const express=require('express')
const Student=require('./models/students')
const router=new express.Router()//we hav created express router

router.get("/saurav",(req,res)=>{
    res.send("dsdasd")
})



router.get('/students',async (req,res)=>{
    try{
    const StudentsData=await Student.find()
    res.send(StudentsData)
    }
    
    catch(err){
    res.send(err)
    }
    })
    router.get("/students/:id",async(req,res)=>{
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

    
router.post('/students',async (req,res)=>{
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

    router.delete("/students/:id",async(req,res)=>{
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

        router.patch("/students/:id",async(req,res)=>{
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

        module.exports=router