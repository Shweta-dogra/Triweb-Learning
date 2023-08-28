
const userModel = require('../models/user');

//--register
module.exports.register = async(req, res)=>{
    try {
        let result = await userModel.create(req.body);

        console.log("result: ", result.dataValues.id);
        res.send({status: "success", data: {id: result.dataValues.id}});
    } catch (error) {
        res.send({status: "error", msg: "user registration failed"});
    }
    
}

//--get
module.exports.get = async(req, res)=>{
    try{
        let data = await userModel.findByPK(req.body.id);
        res.send({status: "success", udata: data});
        console.log("Resp: ", data);
    }
    catch(error){
        res.send({status: "error", msg: "user not found"});
    }
    
    
}

//--update
module.exports.update = async(req, res)=>{
    try{
        let user = await userModel.findByPK(req.body.id);
        user.password = req.body.password;
        await user.save();
        res.send({status: "success", msg: "User data updated"});
    }
    catch(err){
        res.send({status: "error", msg: "user data not updated"});
    }
    
}

//--delete
module.exports.deleteUser = async(req, res)=>{
    try {
        let user = await userModel.findByPK(req.body.id);
        await user.destroy();

        res.send({status: "success", msg: "User data deleted"});
    } catch (error) {
        res.send({status: "error", msg: "user data not deleted"});
    }
    
}