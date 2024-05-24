//require('dotenv').config()

import dotenv from "dotenv"


import connectDB from "./db/index.js"

dotenv.config({

    path:'./env'
})
 

connectDB()







//1st Method->all in one file 
/*
import express from "express"
const app=express()


;(async()=>{

    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //listeners->even if database is connected ..what if express app can;t respond listen
        app.on("error",(error)=>{
            console.log("ERRR",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })

    }catch(error)
    {
        console.error("ERROR",error)
        throw err
    }
})()



//function connectDB(){}



//onnectDB()




*/