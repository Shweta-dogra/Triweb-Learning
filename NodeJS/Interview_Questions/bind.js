//change the 'this' for some object
//but call it later

/* ->The simplest use of bind is to make a function that, no  matter how it is called, is called with a particular 'this' 
-> in call() and apply() we bind 'this' and execute function at a time while,
in bind() we bind 'this' now and execute it later
*/

let student={
    sname: "Shweta",
    mobile: 234567,

    getName: function(){
        console.log(this.sname);
    }
}
let sn = student.getName.bind(student); 
setTimeout(sn, 1000); // Shweta after 1 sec

let student2 ={
    sname: "Azhar",
    mobile: 98765,
}

let st2 = student.getName.bind(student2);
setTimeout(st2, 2000); //Azhar after 2 sec