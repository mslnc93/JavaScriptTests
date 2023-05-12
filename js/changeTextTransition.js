function changeText(event){
    var element = event.target
    element.innerHTML = "Ouuuuups";
    element.style.color = "blue";
    element.style.fontSize = "60px";
    element.style.transition = "all 3s ease-out"
}

document.getElementById("text").addEventListener('click',changeText);