const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost/publicaciones")
        .then(db=>console.log("db is connected"))
        .catch(err=>console.error(err))