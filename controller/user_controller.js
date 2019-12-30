const bcrypt = require("bcryptjs")
const path = require("path")
const User = require("../models/User")

const controller = {

    login: () => {


    },

    register: (req, res) => {
        var body = req.body
        console.log(body);

        var _user = {
            name: body.username,
            summoner: "",
            password: bcrypt.hashSync(body.password, 8),
            email: body.email,
            elo: "",
            server: "",
            uid: ""
        }


        switch (body.server) {
            case "na":
                _user.server = "North America";
                break;
            case "euw":
                _user.server = "Europe West"
                break;
            case "jp":
                _user.server = "Japan"
                break;
            case "kr":
                _user.server = "Korea"
                break;
            case "br":
                _user.server = "Brasil"
                break;
            case "tr":
                _user.server = "Turkey"
                break;
            case "na":
                _user.server = "North America"
                break;
            case "las":
                _user.server = "Latin America South"
                break;
            case "eun":
                _user.server = "Europe Nodic and Est"
                break;
            case "lan":
                _user.server = "Latin America North"
                break;
            default:
                _user.server = "Undefined Server"
        }


        var user = new User(_user).save((err) => {
            if (err) {
                console.log("Error", err);
            }
        })



    }




}


module.exports = controller