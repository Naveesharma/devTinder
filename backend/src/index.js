const express = require("express");
const {connectDB} = require('./config/database')
const dotenv= require('dotenv')
dotenv.config()


const PORT = process.env.PORT || 3000;

const app = express();


connectDB().then(()=>{
    console.log("database connected successfully")
    app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});

})
.catch((err)=>{
    console.log('Database not connected ')
})
