var h1tag = document.querySelector('h1');
var htmlTag = document.querySelector('html');

var name = prompt("Enter your name!");

h1tag.textContent = "Hello "+name;

htmlTag.onclick = function() {
    console.log("clicked");
    h1tag.textContent = "Hi "+name+" you clicked here.";
    alert("You clicked here on HTML.");
}