const str = "str 1 str 2 str 3 67 str 5";
console.log(str.replace('str', 'STR'));

const reg = /str/g; // replace all str
console.log(str.replace(reg, "STR"));

const reg1 = /str/i; // replace 1st str
console.log(str.replace(reg1, "STR"));