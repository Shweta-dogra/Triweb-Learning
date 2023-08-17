function validateUser(name, password){
    if(name==""){
        console.log("Invalid user name");
        return;
    }  else if(password=="" || password.length<8){
        console.log("Invalid password");
        return;

    } else{
        console.log("Yes, Successfully validated.");
    }
    
}

let userName = "Shweta";
let userPasword = "12345@wer";

validateUser(userName, userPasword);