const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/olympics",{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{console.log("connection fullfilled")}).catch(()=>{console.log("no connection")})
//module.exports=mongoose