
//ternary operator
let x =9;

//if x is a multiple of 3 then assign x to y otherwise assign y =0
let y ;

if(x%3==0){
    y =x;
}else{
    y =0;
}

console.log("using if",y);

y = (x%3==0)? x:0; //ternary

console.log("using ternary",y);




//COmma operator

let a1 = (1, 2, 3, 4);  //returned last value
console.log(a1) //4

for(let p =0, q=3; p<2; p++,q++){   // handle multiple values in one loop
    console.log("p=", p);
    console.log("q=", q);
}