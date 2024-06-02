import express from"express"
const app=express()
import cookiParser from "cookie-parser"

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



export{app}