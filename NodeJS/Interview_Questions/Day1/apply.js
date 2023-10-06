// In call() we pass arguments 

// in apply() we pass array

function marksDetail(...marks){
    this.s1 = marks[0];
    this.s2 = marks[1];
    this.s3 = marks[2];
    this.s4 = marks[3];
    this.s5 = marks[4]; 

    let status = "pass";
    marks.forEach((num)=>{
        if(num<33){
            status= "fail";
        }
    });
    this.result = status;
}

function student(sname, ...marks){
    this.sname = sname;
    marksDetail.apply(this, marks);
    
}

const student1 = new student("Shweta", 89, 56, 73, 66, 48);

console.log(student1);


//call

function product(pname, price){
    this.pname = pname;
    this.price = price;
}

function user(uname, pname, price){
    product.call(this, pname, price);
    this.uname = uname;
}

const user1 = new user("Azhar", "Laptop", 40000);
console.log(user1.price); //40000

