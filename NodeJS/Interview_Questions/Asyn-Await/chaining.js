async function getName(flag = 8){
    if(flag===1){
        return "One";
    } else if(flag===2){
        return "Two";
    } else if(flag==="One"){
        return "Yes I got first promise";
    }
}

async function fetchData(){
    const res1 = await getName(1);
    const res2 = await getName(res1);
    return (res1, res2);
}

async function main(){
    const result = await fetchData();
    console.log(result.res1);
    console.log(result.res1);
}

main();