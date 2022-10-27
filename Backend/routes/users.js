const express= require("express")
const jwt = require("jsonwebtoken")
const users = express.Router()
const {register,login}= require("../controllers/users")

users.post("/register",register)
users.post("/login",login)



module.exports = users