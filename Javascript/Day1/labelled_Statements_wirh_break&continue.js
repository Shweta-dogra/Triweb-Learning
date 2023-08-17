let n =5;

outer:    //label for outer loop
for(let i =1; i<=n; i++){    //outer loop

    for(let j =1; j<=n; j++){    //inner loop

        console.log(i, j);
        if(j==3){
            break outer;    // this will breakl the outer lopp when j=3
        }
    }
}

//continue statement

outer:    //label for outer loop
for(let i =1; i<=n; i++){    //outer loop

    for(let j =1; j<=n; j++){    //inner loop

        console.log(i, j);
        if(j==3){
            continue outer;    // this will continue the outer lopp when j=3
        }
    }
}