const express=require("express")
const app=express()
const path=require("path")
const port =process.env.PORT||1200
require("./db/conn")
const hbs=require("hbs")//this is for the partials
const Register=require("./models/registers")


const static_path=path.join(__dirname,"./public") 
const template_path=path.join(__dirname,"./templates/views") 
const partials_path=path.join(__dirname,"./templates/partials") 
//console.log(path.join(__dirname,"./public") )



app.use(express.static(static_path))//it will search for index.html
app.set("view engine","hbs")
app.set("views",template_path)//instead of views check this path
hbs.registerPartials(partials_path)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
app.get("/",(req,res)=>{
res.render("index")
})
app.get("/login.hbs",(req,res)=>{
    res.render("login")
})//this way you can render multiple pages inside the views directory

app.get("/register.hbs",(req,res)=>{
    res.render("register")
})

app.post("/register.hbs",async(req,res)=>{
            try{
               const password=req.body.password
               const cpassword=req.body.password_confirmation//confirmPassword should be same as described in html
             
               if(password===cpassword)
               {
                const registerEmployee=new Register({
                    firstname:req.body.first_name,
                    lastname:req.body.last_name,//lastname(as typed in schema) and last_name(as in html(registration page) ) 
                    email:req.body.email,
                    phone:req.body.your_phone,
                    gender:req.body.male,
                    age:req.body.your_age,
                    password:req.body.password,
                    confirmPassword:req.body.password_confirmation
                })
                 const registered=await registerEmployee.save()
                  res.status(201).render("index")
                }
               else{
                res.send("password not matching")
               }
            }
            catch(e)
            {
                res.status(400).send(e)
            }
})

app.post("/login.hbs",async(req,res)=>{
    try{
       const password=req.body.password
       const email=req.body.email
       console.log(password)
       const userEmail=await Register.findOne({email:email})
         if(password===userEmail.password)
         {
             res.status(201).render("index")
         }
         else
         {
             res.send("Incorrect password or email")
         }

  
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})



//example of authentication
const bcrypt=require("bcrypt")
const tightPassword=async(password)=>{
          const hashPassword=  await bcrypt.hash(password,10)
            const match=await bcrypt.compare(password,hashPassword)
          console.log(hashPassword)
        }
        tightPassword("saurav")
app.listen(port,()=>{
    console.log("server is running: "+ port)
})
