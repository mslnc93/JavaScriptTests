document.getElementById("titre").addEventListener("mouseover", survole)

function survole(event) {
    event.target.innerHTML = "Merci d'avoir survolé";
}

document.getElementById("stop").addEventListener("click", function(){
    document.getElementById("titre").removeEventListener("mouseover", survole)
});

document.getElementById("play").addEventListener("click", function(){
    document.getElementById("titre").addEventListener("mouseover", survole)
});
