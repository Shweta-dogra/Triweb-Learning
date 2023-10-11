const obj = {a:1, b:2, c:3};

const newObj = {...obj};

console.log("Before obj- ", obj); //{a:1, b:2, c:3}
console.log("Before newObj- ", newObj);  //{a:1, b:2, c:3}

obj['a']=9;

console.log("After obj- ", obj); //{a:9, b:2, c:3}
console.log("After newObj- ", newObj);  //{a:1, b:2, c:3}