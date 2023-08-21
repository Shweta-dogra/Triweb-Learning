let myUser = null;

const redBlock = document.getElementById("red-block");
const greenBlock = document.getElementById("green-block");
const blueBlock = document.getElementById("blue-block");
const yellowBlock = document.getElementById("yellow-block");
const userInput = document.getElementById("user");
const addBtn = document.getElementById("btn-add");
const deleteBtn = document.getElementById("btn-delete");
const redBtn = document.getElementById("btn-redmove");
const greenBtn = document.getElementById("btn-greenmove");
const blueBtn = document.getElementById("btn-bluemove");
const yellowBtn = document.getElementById("btn-yellowmove");

function addUserToProject(){
    if(myUser==null){
        myUser = document.createElement("div");
   

        myUser.setAttribute("id", "my_user");

        myUser.setAttribute("class", "my_user");

        myUser.innerHTML = userInput.value;
        // console.log(myUser);

        redBlock.append(myUser);
        userInput.disabled = "true";
        addBtn.disabled = true;
        deleteBtn.disabled = false;
    }
    
    
}

function deleteUser(){
    if(myUser != null){
        myUser.remove();
        userInput.disabled = false;
        addBtn.disabled = false;
        deleteBtn.disabled = true;
        userInput.value="";
        myUser = null;
    }
}

function moveToRed(){
    if(myUser!=null){
        redBlock.append(myUser);
    }
    
}

function moveToGreen(){
    if(myUser!=null){
        greenBlock.append(myUser); 
    }
    
}

function moveToBlue(){
    if(myUser!=null){
        blueBlock.append(myUser); 
    }
  
}

function moveToYellow(){
    if(myUser!=null){
        yellowBlock.append(myUser); 
    }
    
}


addBtn.addEventListener("click", addUserToProject);

deleteBtn.addEventListener("click", deleteUser);

redBtn.addEventListener("click", moveToRed);

greenBtn.addEventListener("click", moveToGreen);

blueBtn.addEventListener("click", moveToBlue);

yellowBtn.addEventListener("click", moveToYellow);