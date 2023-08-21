function printData(...rest){
    rest.forEach((ele)=>{
        console.log("You sent ", ele);
    });

    const [firstElement] = [...rest];

    console.log("First element is ", firstElement);
}

printData(1, 2, 3);
printData(1, 2, 3, 4, 5, 6, 7, 8, 3, 6, 7, 9);