const express=require("express")
const router=new express.Router()
const {registerUser,loginUser} =require("../../controllers/user.controller")
router.post("/user/register",async(req,res)=>{
    try{
        const request=req.body
        console.log(request)
        const newUser=await(registerUser(request.email,request.nickname,request.password))
        res.status(200).send({status:true,message:"Usuario Registrado con éxito",data:{email:newUser.email,nickname:newUser.nickname,token:newUser.token}})
    }catch(error){
        console.log(error)
        res.status(500).send({status:false,message:"Registro Fallo",data:{error:error.toString()}})
    }
})
router.post("/user/login",async(req,res)=>{
    try{
        const request=req.body
        console.log(request)
        const loggedUser=await loginUser(request.email,request.password)
        res.status(200).send({status:true,message:"Usuario Ingreso con éxito",data:{email:loggedUser.email,nickname:loggedUser.nickname,token:loggedUser.token}})
    }catch(error){
        console.log(error)
        res.status(500).send({status:false,message:"Login Fallo",data:{error:error.toString()}})
    }
})

module.exports=router