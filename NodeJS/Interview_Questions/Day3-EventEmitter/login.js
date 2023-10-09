const {myEventEmitter, LOGIN_EVENT} = require('./eventFile');


module.exports.loginSuccessfull=(userName)=>{
    setInterval(()=>{
        myEventEmitter.emit(LOGIN_EVENT, userName);
    }, 3000)
    
}