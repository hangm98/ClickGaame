var click = false;
var button = document.createElement("button");
var body = document.getElementById("buttonDiv");
button.innerHTML="Click Me";
button.addEventListener("click", function() {
    click = true;
} );

function setButton() {
    const id = setInterval(() => {
        body.appendChild(button);
        var rand = Math.floor(Math.random() * 500) + 100;
        const id2 = setTimeout(clearButton, rand);
        if(click){
            clearTimeout(id2);
            body.removeChild(button);
            document.getElementById("p2").innerHTML = "<strong>CONGRATULATION!</strong>";
            clearInterval(id);
        }
    }, 5000)
}

function clearButton() {
    body.removeChild(button);
}

function createbutton() {
    
}