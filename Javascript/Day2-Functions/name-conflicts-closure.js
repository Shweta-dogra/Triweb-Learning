function outer(num){
    let x =5; 

    function inner(x){
        // local gets preference

        let num = 8;
        console.log(x); //7
        console.log(num); //8
    }

    inner(7);
}

outer(3);