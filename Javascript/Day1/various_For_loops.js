let obj = {
    name: "India",
    code: "91"
}

//for in statement 
for (const key in obj) {
    console.log(key, obj[key]);
    console.log(`${key} of object is ${obj[key]}`);
        
}


//for of statement

const arr = [3, 6, 10, 4, 7, 24, 76];
for (const ele of arr) {
    console.log(ele);
}

//for each

arr.forEach(element => {
    console.log(element);
});