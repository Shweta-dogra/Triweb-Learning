function student(name, age){
    this.name = name;
    this.age = age;
}

let stu1 = new student("shweta", 25);
console.log(stu1);

console.log(stu1.__proto__);//{}

console.log(stu1.prototype); //undefined


stu1.__proto__.display = function(){
    console.log(`Hi ${this.name}`);
}

stu1.display(); //Hi shweta

let stu2 = new student("Armaan", 26);
console.log(stu2);

stu2.display();  //Hi ARmaan


console.log("---------------------------------------------------------");

console.log(student.__proto__); //{}

console.log(student.prototype); //{ display: [Function (anonymous)] }

student.prototype.display = function(){
    console.log(`Hi ${this.name}`);
}

stu1.display(); //Hi shweta
stu2.display();  //Hi Armaan