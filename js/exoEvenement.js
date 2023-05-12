// function mClick(event){
//     event.target.style.color = "green"
//     event.target.innerHTML = "Merci d'avoir cliqué " + userName ;
// }

// var userName = prompt("Comment vous appelez-vous ?")


// document.getElementById("title").onclick = mClick;


//Exercice 

// function mOver(event) {
//     alert("Merci " + nom + " d'avoir survolé le carré")
//     event.target.style.backgroundColor = "green"
//     event.target.style.borderRadius = "20px"
// }
// var nom = prompt("Quel est votre nom d'utilisateur ?");


// document.getElementById("bg").onmouseover = mOver;


//Exercice

// function mClick(event) {
    
//     var age = prompt("Entrez votre âge");
//     if (age >= 60){
//         event.target.style.fontSize = "70px";
//     }
//     else if (age > 12){
//         event.target.style.fontSize = "24px";
//     }
//     else {
//         event.target.style.fontSize = "12px";
//     }
// }

// document.getElementById("age").onclick = mClick;


//Exercice : compteur


var i = 0;

document.getElementById("maDiv").onclick = compteur_fontion;

function compteur_fontion() {
    document.getElementById("affichage").innerHTML = i++;
    affichage.innerHTML = "Nombre de clics: " + i;
}

