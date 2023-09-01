 //Object types
let num:{x:number, y:number} = {x:1, y:4}
console.log(num);

//optional properties
let num1:{x:number, y?: number} = {x:1}
console.log(num1);

//Interfaces
//An interface declaration is another way to name an object type
interface Point{
    x:number, 
    y: number
}
let p1:Point = {x:100, y:120}

// type alias
type myPoint = {
    x: number;
    y: number
}
let p2:myPoint = {x:25, y:30}

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

const typeInDetail = ()=>{

    //union type
    let id: number | string = 2;
    let x : string[] | string = ["@", "e"];

    //Mapped Types
    type onlyBoolsAndHorses = {
        [key: string]: boolean | "Horse";

    };

    const conforms:onlyBoolsAndHorses = {
        del: true,
        rodney: false,
        x: "Horse"
        // 3:"E"// Not allowed key should be string
    }
}

const classCheck =()=>{

    // Case1 : Now not work in latest version, initialization is mandatory
    class Point{
        x:number = 0;
        y:number =0;
    }

    const pt = new Point();
    // pt.x =1;
    // pt.y =2;

    console.log(pt);

    // Case2
    class Point1{
        x=0;
        y=0;
    }
    const pt1 = new Point1();
    pt1.x =1;
    pt1.y = 4;
    console.log(pt1);

    //Case3
    class Point2{
        x:number;
        constructor(n:number){
            this.x = n;
        }
    }
    const pt2 = new Point2(7);
    console.log(pt2);


    // Case4: getter/setter
    class Student{
        private _name:string = "";
        private _standard:Number = 0;
        
        get name():string{
            return this._name;
        }
        set name(value:string){
            this._name = value;
        }

        get standard():Number{
            return this._standard;
        }
        set standard(value:Number){
            this._standard = value;
        }

        
    }
    let sh = new Student();
        sh.name = "Shweta";
        sh.standard =7;
        console.log("shweta", sh);
} 
classCheck();

