const person = {
    id: 1234,
    pname : "xyz"
}

// const xyz = Symbol('xyz');
// person[xyz] = "Hidden data";

// console.log(person);
// person.id = 2;
// console.log(person);
// console.log(Object.getOwnPropertyNames(person));


//you can not create same symbol key twice

// console.log(Object.getOwnPropertySymbols(person));

//global symbol
const xyz = Symbol.for('xyz');
person[xyz]= "Not hidden data";
console.log(person[xyz]);
const iKnowThis  = Symbol.for('xyz');
console.log(person[iKnowThis]);
