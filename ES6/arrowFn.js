//exaple1
const xyz = ()=>{
    console.log("XYZ", this);
}

console.log("Here", this); //Here{}
xyz(); //XYZ{}


//example2
let arr = [1, 2, 3, 4];
const arrMap = arr.map(function(ele){
    return ele*2;
})

console.log(arrMap);

const arrMap1 = arr.map(ele=> ele*3)

console.log(arrMap1);

//example3
const retObj = (uname, age)=>({uname:uname, age:age});
console.log(retObj("Alex", 30));

//exapmle4
const addNum = (n1, n2)=>n1+n2 ;
console.log(addNum(4, 5)); //9

//example5 making statement body
const arr1 = [1, 2, 3, 4];
arr1.forEach((e)=>{
    console.log(e+" "); 
})