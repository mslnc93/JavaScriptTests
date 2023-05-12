function mDown(event) {
    event.target.style.backgroundColor = "#1ec5e5";
    event.target.innerHTML = "Click Down";
}

function mUp(event) {
    var elem = event.target //simplification avec une variable ( ça nous évite d'écrire even.target à chaque fois)
    elem.style.backgroundColor = "#D94A38";
    elem.innerHTML = "Click Up";
}

document.getElementById("myBox").onmousedown = mDown;
document.getElementById("myBox").onmouseup = mUp;

//événement lié au survol de la souris (mouseover) :


function mOver(event){
    event.target.innerHTML = "Thank you !";
    event.target.style.backgroundColor = "magenta";
}

function mOut(event){
    event.target.innerHTML = "Mouse over me";
    event.target.style.backgroundColor = "blue";
}

document.getElementById("myBox2").onmouseover = mOver;
document.getElementById("myBox2").onmouseout = mOut;