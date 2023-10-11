async function giveMeName(){
    return "Shweta Dogra";
}

async function main(){
    const name = await giveMeName();
    console.log("name is: ", name);
}

main();