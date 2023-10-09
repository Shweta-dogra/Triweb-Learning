const {myEventEmitter, LOGIN_EVENT} = require('./eventFile');
const dbFile = require('./dbFile');
const {loginSuccessfull} = require('./login');


myEventEmitter.on(LOGIN_EVENT, (userName)=>{
    console.log("Send email to user ", userName);
})

loginSuccessfull("Shweta");