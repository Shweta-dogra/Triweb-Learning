async function giveMeName(){
    return "Shweta Dogra";
}

(async()=>{
    const name = await giveMeName();
    console.log("name is: ", name);
})()

