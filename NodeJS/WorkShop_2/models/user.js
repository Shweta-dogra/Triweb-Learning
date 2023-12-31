
const db = require('../util/database');

module.exports.insert= async(userData)=>{

    // console.log(userData);
    let id =0;

    try{
        let query = "INSERT into `usertable` (`name`, `email`, `password`) VALUES (?, ?, ?)";
    
        let result = await db.execute(query, [userData.name, userData.email, userData.password]);
        id = result[0].insertId;
        console.log(id);
    } 
    catch(error){
        console.log(error);
        return false;
    }
    
    return id;
}

module.exports.get = async(userData)=>{
    let retData = '';
try{
    let query = "SELECT * from `usertable` WHERE id = ?";
    let result = await db.execute(query, [userData.id]);
    retData = result[0][0];
}
catch(error){
    console.log(error);
}

return retData;
}

module.exports.update = async(userData)=>{
   
try{
    let query = "UPDATE `usertable` SET `password`=? WHERE id = ?";
    let result = await db.execute(query, [userData.password, userData.id]);
    return true;
}
catch(error){
    console.log(error);
    return false;
}

}

module.exports.deleteUser = async(userData)=>{
    
try{
    let query = "DELETE from `usertable` WHERE id = ?";
    let result = await db.execute(query, [userData.id]);
    return true;
}
catch(error){
    console.log(error);
    return false;
}

}