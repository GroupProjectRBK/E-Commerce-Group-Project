const db = require("../database/index")
const bcrypt=require('bcrypt')

module.exports={
    insertP:(cb,values)=>{
        var sql='insert into products set name=? , category=? , price=? , img=? , description=? , user_id=?'
        db.query(sql,[values.name,values.category,values.price,values.img,values.description,values.user_id],(err,result)=>{cb(err,result)})
    },
    updateP:(cb,values)=>{
        var sql='update products set name=? , category=? , price=? , img=? , description=? , where id = ?'
        db.query(sql,[values.name,values.category,values.price,values.img,values.description,values.id],(err,result)=>{cb(err,result)})
    },
    deleteP:(cb , values)=>{
        var sql='DELETE FROM products WHERE id=? and user_id=?'
        db.query(sql,[values.id,values.user_id],(err,result)=>{cb(err,result)})
    },
    getallP:(cb,values)=>{
        var sql='select * from products where user_id=?'
        db.query(sql,[values.user_id],(err,result)=>{cb(err,result)})
    },
    updateUser:(req,res)=>{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
            return res.status(500).send({
            msg: err
            });
            } else {
            // has hashed pw => add to database
            db.query(
            `update user set username=${req.body.username} password=${db.escape(hash)} email=${db.escape(req.body.email)} where iduser=${req.body.id}`,(error, result) => {
            if (error) {
            throw error;
            return res.status(400).send({
            msg: error
            });}
            return res.status(201).send({
            msg: 'The user has been registerd with us!'});});
            }
            });
    },
    deleteAcc:(cb,values)=>{
        var sql='delete from user where iduser=?'
        db.query(sql,[values.iduser],(err,result)=>{cb(err,result)})
    }
}