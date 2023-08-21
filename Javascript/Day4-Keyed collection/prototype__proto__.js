let obj = {name:"SHweta", add:"India"};

// console.log(obj.prototype); //undefined

// obj.prototype.designation = "abc";
// console.log(obj.prototype); //type error
obj.display = function(){
    console.log(`${this.name} live in ${this.add}.`);
}

console.log(obj.__proto__);
let obj1 = Object.create(obj);

console.log("Obj1 proto", obj1.__proto__); //{name:"SHweta", add:"qwedfv"}

obj1.name="Ajit";

obj1.display();


