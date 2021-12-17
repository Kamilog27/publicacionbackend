const express=require("express")
const router=new express.Router()
const {authenticate} = require("../../middleware/auth")
const { createPublicacion,queryPublicacion} = require("../../controllers/publicacion.controller")


router.get("/publicaciones",authenticate,async(req,res)=>{
        try{
            const request=req.body
            const params=req.params
            const queriedPub=await queryPublicacion()
            res.status(200).send({status:true,message:"Publicacion consultado con éxito",data:{publicacion:queriedPub}})
        }catch(error){
            
            console.log(error)
            res.status(500).send({status:false,message:"Consulta Fallo",data:{error:error.toString()}})
        }
})
router.post("/create-publicacion",authenticate,async(req,res)=>{
    try{
        const request=req.body
        const params=req.params
        const createdPublicacion=await createPublicacion(
            request.text,
            req.headers["nickname"]
        )
        res.status(200).send({status:true,message:"Publicación Registrada con éxito",data:{publicacion:createdPublicacion}})
    }catch(error){
        console.log(error)
        res.status(500).send({status:false,message:"Creación de publicación Fallo",data:{error:error.toString()}})
    }
})

module.exports=router