const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const employeSchema=new mongoose.Schema({
    firstname:{
        type:String,
       
        required:true

    },

    lastname:{
        type:String,
        
        required:true

    },
    email:{
        type:String,
        
        required:true

    },
    phone:{
        type:Number,
      
        required:true

    },
    gender:{
        type:String,
        
        required:true

    },
    age:{
        type:Number,
        
        required:true

    },
    password:{
        type:String,
        
        required:true

    },
    confirmPassword:{
        type:String,
        
        required:true

    },




})
//we will use here a middleware
//two types of middleware-pre and post, both will take two arguments the second argument is the FUNCTION
employeSchema.pre("save",async function(next){
   // const hash=await bcrypt.hash(password,10) 
   if(this.isModified("password"))
   {
    //const hash=await bcrypt.hash(password,10)
    console.log(`the current password is : ${this.password}`)
      this.password=await bcrypt.hash("password",10)
      console.log(`the current password is : ${this.password}`)
     confirmPassword=undefined
    }
    next()

})

const Register=new mongoose.model("Register",employeSchema)//Register should be capital because it is a class
module.exports=Register