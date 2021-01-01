const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/registration",{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{console.log("connection fullfilled")}).catch(()=>{console.log("no connection")})