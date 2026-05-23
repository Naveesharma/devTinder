const express = require("express");
const {connectDB} = require('./config/database')
const dotenv= require('dotenv')
// const User =require('./models/user');
const user = require("./models/user");
dotenv.config()


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());



app.post('/signup',async(req,res)=>{

    try{

        const {firstname,lastname,email,age,gender} = req.body

  const existingUser = await user.findOne({email})
  if(existingUser)
  {
    return res.status(400).send('user already existed')
  }

  const newUser= new user({
    firstname,
    lastname,
    age,
    email,
    gender
  })
  
  await newUser.save()
  res.status(201).send("User created successfully")

    }
    catch(error)
    {

        console.log(error)
        res.status(404).send("something went wrong")
    }


  


})







connectDB().then(()=>{
    console.log("database connected successfully")
    app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});

})
.catch((err)=>{
    console.log('Database not connected ')
})

