function xyz(){
    this.x = 5;
}

let y = new xyz;

let z = new xyz;

console.log(y); //xyz {x:5}

console.log(z.x); //5

z.x =8;
console.log(z); //xyz {x:8}