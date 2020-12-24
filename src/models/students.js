const mongoose=require('mongoose')
const validator=require('validator')
const studentSchema=new mongoose.Schema({
  name:{
      type:String,
      minlength:2,
     unique:true,
      required:true
  },
  email:{
    type:String,
      required:true,
      unique:true,
     
      validate(value){
        if(!validator.isEmail(value))
        {
            throw new Error("Invalid erorr")
        }
      }
    },
      phone:{
          type:Number,
          minlength:5,
          maxlength:10
      },
      address:{
          type:String,
          required:true
      }

  

})

//we have created a new collection
const Student=new mongoose.model('Student',studentSchema)

module.exports=Student