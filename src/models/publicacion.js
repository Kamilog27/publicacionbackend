const mongoose=require("mongoose")

const publicacionSchema=new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    nickname:{
        type:String,
        required:true
    }
},
    {
        timestamps:{currentTime: () => Math.floor(Date.now()-18000000)},
        versionKey: false
    })
const Publicacion=mongoose.model("Publicacion",publicacionSchema)
module.exports=Publicacion