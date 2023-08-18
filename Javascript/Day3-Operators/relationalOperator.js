//in

let obj  ={username:"shweta", mob:234}

if('username' in obj){
    console.log(obj.username);
}  



//instance of

function xyz(){
    this.x = 5;
}

let y = new xyz;
console.log(y); //xyz {x:5}

console.log(y instanceof xyz); //true

console.log(obj  instanceof xyz); //false