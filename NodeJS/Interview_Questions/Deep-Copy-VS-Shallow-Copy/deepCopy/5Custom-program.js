
const obj = {
    a:{
        p:1,
        q:21
    },
    b:2,
    c:3
};

function deepCopyViaCoding(src, dest){
    for(const key in src){
        if(typeof(src[key])=='object'){
            dest[key] ={};
            deepCopyViaCoding(src[key], dest[key])
        } else{
            dest[key] = src[key];
        }
    }
    return dest;
}

const copiedObject = deepCopyViaCoding(obj, {});

obj['a']['p']=11;

console.log(obj);
console.log(copiedObject);
