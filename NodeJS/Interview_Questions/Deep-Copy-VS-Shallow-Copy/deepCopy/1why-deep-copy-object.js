const obj = {
    a:{
        p:1,
        q:21
    },
    b:2,
    c:3
}
const newObj = {...obj};

console.log("Before obj- ", obj);
console.log("Before newObj- ", newObj);  

obj['a']['p']=11;

console.log("After obj- ", obj);
console.log("After newObj- ", newObj); 