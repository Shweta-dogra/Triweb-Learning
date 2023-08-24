//parameter context matching
function printType1([name, age]){
    console.log("name  is ", name);
    console.log("age is", age);
}

printType1(["Amit", 23]);

function printType2({name, age}){
    console.log("name  is ", name);
    console.log("age is", age);
}

printType2({name:"Amen", age:23});

function printType3({name:ename, age:eage}){
    console.log("name  is ", ename);
    console.log("age is", eage);
}

printType1({name:"Ajay", age:24});