
function Origin(){
    this.country = "India";
}
function Employee(mobile){
    Origin.call(this);
    this.department = 'None';
    this.mobile = mobile;
}

Employee.prototype = Object.create(Origin.prototype);
Employee.prototype.constructor = Origin;

function Manager(name){
    Employee.call(this);
    this.name = name;
}

let aakash = new Manager("Aakash");

console.log(aakash);

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

console.log(aakash.__proto__.__proto__);
