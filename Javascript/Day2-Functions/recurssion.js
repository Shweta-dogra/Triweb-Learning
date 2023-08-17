
function printSeries(n){
    if(n==0){
        return 0;
    }
    console.log(n);
    
    printSeries(n-1);
}

printSeries(5);

//other ways of recursion

const series = function printSeries(n){
    if(n==0){
        return 0;
    }
    console.log(n);
    
   // method:2
    // printSeries(n-1);

   //method 3
//    arguments.callee(n-1);

   //method 4
   series(n-1);
}

series(6);