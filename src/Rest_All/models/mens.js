const mongoose=require('mongoose')
const validator=require('validator')
const menSchema=new mongoose.Schema({
  ranking:{
      type:Number,
     
     unique:true,
      required:true
  },
 
  
      name:{
          type:String,
          required:true,
          trim:true
      },
      dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    }, score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        required:true,
        trim:true,
        default:"100"
    },
  

})

//we have created a new collection
const MensRanking=new mongoose.model('MensRanking',menSchema)

module.exports=MensRanking