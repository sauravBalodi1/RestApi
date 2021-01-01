const mongoose=require("mongoose")
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
        unique:true,
        required:true

    },
    phone:{
        type:Number,
        unique:true,
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

const Register=new mongoose.model("Register",employeSchema)//Register should be capital because it is a class
module.exports=Register