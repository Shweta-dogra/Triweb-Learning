let myImg = document.querySelector('img');
let page = document.querySelector('html');

page.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc == './images/img1.jpg'){
        myImg.setAttribute('src', './images/img3.jpg');
    } else{
        myImg.setAttribute('src', './images/img1.jpg');
    }
}