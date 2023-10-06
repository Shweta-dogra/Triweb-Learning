let user={
    uname: "abc",
    mobile: 234567,
}

let key1 ={};
let key2 = {uname: "Azhar"};

let weakMapExample = {
    [key1]: "Some data",
    [key2]: "same other data",
}

console.log(weakMapExample);  //{ '[object Object]': 'same other data' }

/*
=> weak map accepts only object as keys
=>map accepts premitive datatypes as keys
=> there is no size property exists in weak map
*/