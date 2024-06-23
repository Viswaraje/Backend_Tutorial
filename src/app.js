import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true


}))//confid for cors( )

//configurations
app.use(express.json({limit:"16kb"}))//when the app recieves json as req
app.use(express.urlencoded({extended:true,limit:"16kb"}))//for the data in   url
app.use(express.static("public"))//for creating public folder to store files etc. 


app.use(cookieParser())//website hi useful cookie->data extract and remove 













export{app}