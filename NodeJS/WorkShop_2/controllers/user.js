
const userModel = require('../models/user');

//--register
module.exports.register = async(req, res)=>{
   let insertedID = await userModel.insert(req.body);
   console.log("Resp: ", insertedID);
    if(insertedID>0){
        res.send({status: "success", data: {id: insertedID}});
    }else{
        res.send({status: "error", msg: "user registration failed"});
    }
    res.send(req.body);
}

//--get
module.exports.get = async(req, res)=>{
    let data = await userModel.get(req.body);
   console.log("Resp: ", data);
    if(data){
        res.send({status: "success", udata: data});
    }else{
        res.send({status: "error", msg: "user not found"});
    }
    
}

//--update
module.exports.update = async(req, res)=>{
    let status = await userModel.update(req.body);
   console.log("Resp: ", status);
    if(status){
        res.send({status: "success", msg: "User data updated"});
    }else{
        res.send({status: "error", msg: "user data not updated"});
    }
}

//--delete
module.exports.deleteUser = async(req, res)=>{
    let status = await userModel.deleteUser(req.body);
   console.log("Resp: ", status);
    if(status){
        res.send({status: "success", msg: "User data deleted"});
    }else{
        res.send({status: "error", msg: "user data not deleted"});
    }
}