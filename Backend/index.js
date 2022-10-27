const express = require('express');
const cors = require('cors');
const db = require("./database/index")
const products = require("./routes/products")
const users = require("./routes/users")
const bcrypt = require("bcrypt")
const app = express()
const saltRounds = 10
const hash = require("hash")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/products",products)
app.use("/users",users)

// app.post("/register",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

// bcrypt.hash(password,saltRounds),(err,hash)=>{
// if (err){
//     console.log(err)}
    
// db.query(
//     `insert into user (username,password) values (?,?)`,
//     [username,hash], (err,result) => {
//         console.log(err);
//     }

// )    
// }
// })

// app.post("/login",(req,res)=>{ 
//     const username = req.body.username;
//     const password = req.body.password;
//     db.query(
//         `select * from user where username = ?`,  
// username ,(err,results)=>{
//     if(err){
//     res.send({err : err})
//     }

// if(results.length > 0 ){
// bcrypt.compare(password,results[0].password, (error,response)=>{
// if(response){
//     res.send(results)
// }
// else {
//     res.send({message: "wrong credentials"})
// }
// })
// }
// else{
//     res.send({message: "user doesn't exist"})
// }
// }

//     )
// })


const port = 3002;


app.listen(port,() => console.log(`Server is running on ${port}` ));
