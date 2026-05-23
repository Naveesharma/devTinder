const mongoose =require('mongoose')
const { type } = require('node:os')

const userSchema = mongoose.Schema(
    {
     firstname:{
        type:String
     },
     lastname:{
        type:String
     },
     email:{
        type:String
     },
     age:{
        type: Number
     },
     gender:{
        type:String,
        enum:["male","female","other"]
     }



    }
);

module.exports=mongoose.model("User",userSchema);

