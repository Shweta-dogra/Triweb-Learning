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