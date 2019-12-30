const mongoose =  require("mongoose")

const Schema  =  mongoose.Schema;


var userSchema = new Schema({
    name:String,
    password:String,
    email:String,
    elo:String,
    summoner:String,
    server:String,
    uid:String    
})

module.exports = mongoose.model("user",userSchema)