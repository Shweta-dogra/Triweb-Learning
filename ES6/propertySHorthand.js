let name = "Arya";
let age = 29;

let student = {
    name: name,
    age:age
}

console.log(student);

//computed property

let key = "new_key";

function ret(){
    return "qwertyuiop";
}

let obj ={
    sname: "Sim",
    [key]: "Yes",
    [key + 2]: "Go",
    [key +2+ ret()]: "Done"
}

console.log(obj);  //{sname: 'Sim', new_key: 'Yes', new_key2: 'Go', new_key2qwertyuiop: 'Done'}