//new.target

function dempnewtarget(x){
    this.x = x;
    console.log("Inside the function");
}
demonewtarget(4); //Inside the function
 
let x = dempnewtarget(5);  //creating an object of type dempnewtarget
console.log(x);  //{x: 5} 