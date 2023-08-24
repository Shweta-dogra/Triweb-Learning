//being able to use an object as key is an important map feature

const stu1={sname: "asdfg"}

const stu2={sname: "qwer"}

const studentMap = new Map();

studentMap.set("Key1", 12);

studentMap.set(stu1, "He is a good student");

studentMap.set(stu2, "He is a average student");

console.log(studentMap);