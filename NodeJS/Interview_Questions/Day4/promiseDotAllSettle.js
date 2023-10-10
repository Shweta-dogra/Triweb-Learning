//promise.allSettled( ) , iterable
//will also work if any promise will get rejected

function fun1(){
    return new Promise((res, rej)=>{
        res("Function1");
    })
}

function fun2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Function2");
        }, 2000)
        
    })
}

function fun3(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Function3");
        }, 1000)
        
    })
}

function fun4(){
    return new Promise((res, rej)=>{
        rej("Rejected Function4");
        setTimeout(()=>{
            res("Function4");
        }, 1000)
        
    })
}

Promise.allSettled([fun1(), fun2(), fun3(), fun4()])
.then(result=>{
    console.log(result);
})
