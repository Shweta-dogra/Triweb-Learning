
function validate(name){
    return new Promise((Resolve, reject)=>{
        if(name == 'abcd'){
            Resolve("Yes validated")
        } else{
            reject("Not matched")
        }
    })
}

console.log(validate("adbc")); //Unhandeled promise rejection warning

console.log(validate("abcd"));//Yes validated

validate("abcd")
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})
 
