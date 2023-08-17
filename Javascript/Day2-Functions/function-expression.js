//anonymous function

const square = function(n){
    console.log(n*n);
}

square(5);

const getCube = function cube(n){

    console.log(n*n*n);
}

cube(6); //uncaught reference error

getCube(5);