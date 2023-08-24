 let arr =[1, 2, 3, 4];
 let [a, b] = arr;
 console.log("first element ", a); //1
 console.log("second element ", b);  //2

 [b, a] = [a, b]; //interchanging the values of a and b

 console.log(a); //2
 console.log(b); //1


 //object matching, shorthand notation
 
 function getSTudent(){
    let student = {
        sname: "Shardha",
        age: 28,
        level: "BA1",

    }

    return student;
 }

 var {sname, age, level} = getSTudent();

 console.log(sname, age, level); //Shardha 28 BA1


 //deep object matching

 function getData(){
    let obj = {
        ename: "elaija",
        salary: 100000,
        location:{
            city: "Banglore"
        }
    }
    return obj;
 }

 var {ename: employeeName, salary: employeeSalary, location:{city: ecity}} = getData();

 console.log("ename: ", employeeName, "salary: ", employeeSalary, "location: ", ecity);
