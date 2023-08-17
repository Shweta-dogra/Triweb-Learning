function square(num){

    function getSquare(n1){

        function getSqFromInside(n2){
            console.log(n2*n2);
        }
        getSqFromInside(n1);
    }
    getSquare(num);
}
square(5); //25

//inner function preserve outer functions scope

function getFun(num){
    function sqr(){
        // console.log(num*num) //25
        return num*num;
    }
    let res = sqr();
    // console.log(res); //25

    return res;
}

let result = getFun(5);
console.log(result);