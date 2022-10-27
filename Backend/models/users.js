const db = require("../database/index")

module.exports = {
register: (values,cb)=>{
    var sql = `insert into user (username,password) values (?,?)`
    db.query(sql,values,(err,results)=>{
        cb(err,results)
    })
},

login : (values,cb)=>{
    var sql = `select * from user where username = ?`
    db.query(sql,values,(err,results)=>{
        cb(err,results)
    })
}



}