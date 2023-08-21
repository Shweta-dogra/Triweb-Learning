let obj = {
    name: 'Shweta',
    display: function(salary){
        console.log(`${this.name} is earning ${this.salary} rupees.`);
    },

    printAge: function(age){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

obj.display(10);
obj.printAge(20);

