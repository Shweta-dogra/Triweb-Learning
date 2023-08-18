let date = "2023 8 18 13:07:50";
console.log(date); //2023 8 18 13:07:50

let dateObj = new Date();

console.log(dateObj.getMonth()); //8
console.log(dateObj.getDate());
console.log(dateObj.getDay());
console.log(dateObj.getTime());
console.log(dateObj.getSeconds());

dateObj.setMonth(8);
console.log(dateObj);
