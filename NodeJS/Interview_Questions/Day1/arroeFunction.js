//Arrow function

const addTwoNum = (num1, num2)=>{
    return num1+num2;
}

// uname=>{}

const addTOName = uname=> {
    return "HI "+uname;
}

const addHelloTOName = uname=> "Hello "+uname;

const result = addTwoNum(23, 35);
console.log(result);

const hiname = addTOName("Shweta");
console.log(hiname);

const helloname = addHelloTOName("Shweta");
console.log(helloname);

const isThis = ()=>{
    console.log(this);
}
isThis();

console.log(this);

