
const getUser = (req, res)=>{
    res.send("USer found");
}

const postUser = (req, res)=>{
    res.send("Post User found");
}

const putUser = (req, res)=>{
    res.send("Put User found");
}

module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;