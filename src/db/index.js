import mongoose from "mongoose"
import {DB_NAME } from "../constants.js"


const connectDB=async()=>{



    try{

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`);//it takes the mongodb url of host//beacuse it is different for dev,test


    }catch(error){

        console.log("MONGODB connection error",error)
        //to exit this catch loop 
        process.exit(1)

    }
}


export default connectDB