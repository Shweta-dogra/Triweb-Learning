
let decide = 'add';
// let decide = 'subtract';

let getResult;

if(decide=='add'){
    getResult = function(n1, n2){
        console.log(n1+n2);
    }
} else if(decide=='subtract'){
    getResult= function(n1, n2){
        console.log(n1-n2);
    }
}

getResult(8, 2);