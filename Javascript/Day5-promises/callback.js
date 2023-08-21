function failure(err){
    console.log("Failed: ", err);
}

function success(result){
    console.log("Success: ", result);
}

function validate(name, yesSuccess, error){
    if(name=='abcd'){
        yesSuccess("Name is validated");
    } else{
        error("Not matched");
    }
}

validate("abcd", success, failure);