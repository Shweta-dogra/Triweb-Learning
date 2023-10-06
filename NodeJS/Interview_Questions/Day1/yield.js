/* The yiels word is used to pause or resume the generator function
*/

function* getNum(index){
    while(index<5){
        yield index;
        index++;
    }
}

let it = getNum(0);
console.log(it.next().value);  //0
console.log(it.next().value);  //1
console.log(it.next().value);  //2
console.log(it.next().value);  //3
console.log(it.next().value);  //4
console.log(it.next().done);  //true