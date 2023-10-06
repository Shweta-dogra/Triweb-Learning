
function product(productName, price){
    this.productName= productName;
    this.price = price;
}

const p1 = new product("Laptop", 50000);
const p2 = new product("mouse", 900);

console.log(product.productName); //undefined

console.log(p1.productName); //Laptop

console.log(p2.productName); //mouse

function student(sname, productName, price){
    product.call(this, productName, price);
    this.sname = sname;
}

const s1 = new student("Sam", "zheadphones", 2000);

console.log(s1.sname+" purchased a "+s1.productName+" for Rs "+s1.price);