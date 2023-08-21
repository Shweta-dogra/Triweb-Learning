function validateuser(name){
    return new Promise((Resolve, reject)=>{
        if(name == 'abcd'){
            Resolve("Yes valid user")
        } else{
            reject("Invalid user!")
        }
    })
}


validateuser("abcd")
.then((result)=>{
    console.log("Event loop after round 1");
    console.log(result)
})
.catch((err)=>{
    console.log(err)
});

console.log("Event loop round 1");