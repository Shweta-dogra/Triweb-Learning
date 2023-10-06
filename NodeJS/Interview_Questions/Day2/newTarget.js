//new.target is a pseudo property which let you detect whether a function or constructor is called using new operator or not

function dempnewtarget(x){

    if(new.target == undefined){
        console.log("No");
    } else{
        this.x = x;
        console.log("creating an object");
    }
    
    console.log("Inside the function");
}
demonewtarget(4); //Inside the function  // normal function call
 
let x = new dempnewtarget(5);  //creating an object of type dempnewtarget
console.log(x);  //{x: 5} 