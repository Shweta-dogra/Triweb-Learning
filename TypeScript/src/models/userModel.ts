
const addUserToDB = (userName:string, password:string, age:number)=>{
    console.log(userName, password, age);
    return "USer TRegistration Done";
}

// type lockedState = "locked" | "unlocked";


//interface
interface User{
    id:number,
    uname:string,
    password:string,
    age:number,
    isActive: true | false,
    accountStatus: string | number   //union type
}


const updateUserData = (objectUser:User):String=>{

    console.log(objectUser.uname);
    return "Update Done";
}
export {addUserToDB, updateUserData};