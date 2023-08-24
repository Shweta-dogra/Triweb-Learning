class student{


    constructor(sname, classID){
        this.sname = sname;
        this.classID = classID; 
    }
}

const student1 = new student("Amit", 7);

const student2 = new student("Sasha", '8th');

console.log(student1);
//student { sname: 'Amit', classID: 7 }

console.log(student2); 
//student { sname: 'Sasha', classID: '8th' }