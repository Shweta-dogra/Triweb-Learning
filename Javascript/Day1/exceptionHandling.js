

function validateUser(name, password){

    try{
        console.log(name);
        

        if(name.length <4){
            throw new Error("Username is too short");
        }

        if(password.length <8){
            throw new Error("Invalid password");
        }

        console.log("working");
    }
    catch(err){
        console.log(err);
        console.log("Site under maintainance");
    }
    finally{
        console.log("Inside finally block"); //finally will always work
    }
}

let userName = "qwertyui";
let userPassword = "123rtyuin";

validateUser(userName, userPassword);