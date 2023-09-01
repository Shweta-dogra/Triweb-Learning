"use strict";
//Object types
let num = { x: 1, y: 4 };
console.log(num);
//optional properties
let num1 = { x: 1 };
console.log(num1);
let p1 = { x: 100, y: 120 };
let p2 = { x: 25, y: 30 };
// Difference b/w type alias & interface
// you can redeclare interface but not type alias
// interface Point{
//     x:number, 
//     y: number
// }
// type myPoint = {    //Duplicate identifier 'myPoint'.
//     x: number;
//     y: number
// }
const typeInDetail = () => {
    //union type
    let id = 2;
    let x = ["@", "e"];
    const conforms = {
        del: true,
        rodney: false,
        x: "Horse"
        // 3:"E"// Not allowed key should be string
    };
};
const classCheck = () => {
    // Case1 : Now not work in latest version, initialization is mandatory
    class Point {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
    }
    const pt = new Point();
    // pt.x =1;
    // pt.y =2;
    console.log(pt);
    // Case2
    class Point1 {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
    }
    const pt1 = new Point1();
    pt1.x = 1;
    pt1.y = 4;
    console.log(pt1);
    //Case3
    class Point2 {
        constructor(n) {
            this.x = n;
        }
    }
    const pt2 = new Point2(7);
    console.log(pt2);
    // Case4: getter/setter
    class Student {
        constructor() {
            this._name = "";
            this._standard = 0;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get standard() {
            return this._standard;
        }
        set standard(value) {
            this._standard = value;
        }
    }
    let sh = new Student();
    sh.name = "Shweta";
    sh.standard = 7;
    console.log("shweta", sh);
};
classCheck();
