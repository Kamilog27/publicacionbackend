require("./database")
const express=require("express")
const app=express()
const cors=require("cors")
const userRouter=require("./src/routes/user/index")
const pubRouter=require("./src/routes/publicacion/index")
require("dotenv").config()

const port=process.env.PORT | 3000
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
});

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(pubRouter)

app.listen(port,()=>{
    console.log("Server runnig on "+port)
})