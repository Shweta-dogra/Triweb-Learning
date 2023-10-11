const getName = async()=>{
    // throw new Error("Something went wrong")
    return "Code By Heart";
}

async function main(){
    try {
        console.log("Printing inside main");
        const name = await getName();
        console.log("got the name: ", name);
    } catch (error) {
        console.log("Exception handling block - got error ", error.message);
    }
    
}

console.log("Printing before main");
main();
console.log("Printing after main");

// Printing before main
// Printing inside main
// Printing after main
// got the name: Code By Heart