let nSet = new Set();

nSet.add(24);
nSet.add(34);
nSet.add(76);
nSet.add(64);

console.log(nSet); //Set(4) {24, 34, 76, 64}

nSet.add(64);
console.log(nSet);//Set(4) {24, 34, 76, 64}

if(nSet.has(64)){
    console.log("has method is working");
}

console.log("Size of set is ", nSet.size); //4

nSet.delete(64);
console.log(nSet.size); //3