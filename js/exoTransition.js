function transit(event){
    var element = event.target
    element.innerHTML = "<h1>Nouveau titre</h1>";
    element.style.transition = "all 5s ease-out";
    element.style.color = "blue"
}

document.getElementById("para").onclick = transit;