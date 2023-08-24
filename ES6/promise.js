function updateAge(age){

    return new Promise((resolve, reject)=>{
        if(age>0){
            age = age+1;
            resolve(age);
        } else{
            // reject("Invalid age");
            throw new Error("Invalid Age");
        }
    })
}

updateAge(-7)
.then((updatedAge)=>{
    console.log("Update age is ", updatedAge)
},
// (rejectedMsg)=>{
//     console.log(rejectedMsg);
// }
)
.catch((err)=>{
    console.log(err);
})