const Publicacion=require("../models/publicacion")

async function createPublicacion(text,nickname){
    const publicacion=await Publicacion.create({
        text,
        nickname
    }).catch((error)=>{
        console.log(error)
        throw new error("Error al crear la publicacion")
    })
    return{
        text:publicacion.text
    }
    
}
async function queryPublicacion(){
    const publicaciones = await Publicacion.find().catch((error) => {
        console.log(error)
        throw new Error("Error al buscar Publicaciones")
    })
    if (publicaciones == null || publicaciones.length<=0) {
        throw new Error("Error no se encontro ninguna Publicación")
    }
    return publicaciones    
}
module.exports={createPublicacion,queryPublicacion}