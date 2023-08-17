function getProdunt(multiplier){

    return function(num){
        return multiplier*num;
    }
}

const double = getProdunt(2);
let res = double(4);

console.log(res); //8

const triple = getProdunt(3);
let res1 = double(4);

console.log(res1); //12