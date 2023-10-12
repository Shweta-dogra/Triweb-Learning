
const arr = [
    {a:1, b:2},
    [4, 5, 6],
    [7, 8, 9]
];

function deepCopyViaCoding(src, dest){
    for(const key in src){
        if(Array.isArray(src[key])){
            dest[key] =[];
            deepCopyViaCoding(src[key], dest[key])
        }
        else if(typeof(src[key])=='object'){
            dest[key] ={};
            deepCopyViaCoding(src[key], dest[key])
        } else{
            dest[key] = src[key];
        }
    }
    return dest;
}

const copiedArray = deepCopyViaCoding(arr, []);

console.log("Befor- ",arr);
console.log("Before- ",copiedArray);

arr[0]['a']=11;

console.log("After- ",arr);
console.log("after- ",copiedArray);