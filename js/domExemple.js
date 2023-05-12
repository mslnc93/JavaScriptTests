document.getElementById("demo").style.color = "brown"
document.getElementById("demo").style.fontFamily = "calibri"

//Exercice

var prenom = prompt("Quel est votre prénom ?")

var prenomLowercase = prenom.toLowerCase(); //Peu importe comment l'utilisateur écrit son prénom (maj ou min), la couleur en question fonctionnera

if(prenomLowercase == "jhon") {
    document.getElementById("titre").classList.add("jhon");
}

else if(prenomLowercase == "dupond") {
    document.getElementById("titre").classList.add("dupond");
}

else{
    document.getElementById("titre").style.color = "darkblue";
    document.getElementById("titre").classList.remove("bigTitle"); //le remove permet de supprimer une class 

}