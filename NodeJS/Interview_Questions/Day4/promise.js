function fun1(){
    return "Function1";
}

function fun2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            
            res("Function2");
        }, 1000)
    })
}

function fun3(){
    return "Function3";
}

function startCalling(){
    const re1 = fun1();
    console.log(re1);
   fun2()
   .then(result=>{
    console.log(result);
    const re3 = fun3();
    console.log(re3);
   })
   .catch(error=>{
    console.log(error);
   })

    // console.log(re2);
    
}

startCalling();