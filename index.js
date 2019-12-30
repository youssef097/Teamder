const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

//Settings
app.use(express.static(path.join(__dirname,"/public")))
app.set("view-engine","ejs")
app.set("views",path.join(__dirname, "/public"))
app.set("port",process.env.PORT ||3999)

//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Routes
const user_routes = require("./routes/user_routes")

app.use("/",user_routes)

// app.get("/",(req,res)=>{
//     res.render("index.ejs")    
// })


//Mongoose Settings
var uri = "mongodb://localhost:27017/teamder"
mongoose.set("useNewUrlParser",true)
mongoose.set("useUnifiedTopology",true)

mongoose.connect(uri,(err)=>{
    if(err){
        console.log("Error al conectar a ala base de datos",err);        
    }else{
        console.log("Conectado a la DB");        
        app.listen(app.get("port"),()=>{
            console.log("Server running on port ", app.get("port"));
        })                
    }
})






