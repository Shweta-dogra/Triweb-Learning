

//array destructuring
const marksOfStudents = [40, 56, 39, 24, 78, 96, 82, 45];

subject1Marks = marksOfStudents[0];
console.log("Subject1 Marks ", subject1Marks); //40

[subject1, subjec2, subject3, subject4, ...otherMarks]= marksOfStudents;

console.log(subject1, subjec2, subject3, subject4);
console.log("remaining marks", otherMarks);


//object destructuring

const student ={
    'uname': "Shweta",
    'mobile': 98765432,
    'address': "India"
}
const {uname}= student;
console.log(uname);