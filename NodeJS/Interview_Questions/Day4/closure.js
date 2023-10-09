const generatePowerFn=(power)=>{
    return (num)=>{
        return num**power;
    }
}

const square = generatePowerFn(2);
const cube = generatePowerFn(3);
const quad = generatePowerFn(4);


console.log(square(3));  //9
console.log(cube(3));  //27
console.log(quad(3));  //81