const {addUserToDB} = require('../models/userModel');

const registerUser =  (req, res)=>{

    const userName = "Shweta";
    const password = "abcd";
    const result = addUserToDB(userName, password);
    res.send(result);
}

module.exports = {registerUser};