let obj = {
    age: 20,
    get a(){
        return this.age
    },
    set b(newAge){
        this.age = newAge
    }
}

console.log(obj.a); //20

obj.b = 25;

console.log(obj.a); //25