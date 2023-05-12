// function increment(){
//     nombre ++;
//     alert(nombre)
// }

// function calculTVA(tva = 5.5) {
//         alert(tva);
// }

// var nombre = prompt("Veuillez entrer un chiffre");
// increment();


// document.write(nombre)

//Exercice :


// function majeur() {
//     if (age > 18) {
//         alert("Vous êtes majeurs, vous débloquez toutes les foncionnalités du site");
//     }
//     else {
//         alert("Vous êtes mineurs, le site sera partiellement bloqué")
//     }
// }

// var age = prompt("Veuillez entrer votre âge")

// majeur(age);


//Exercice 2 :

function calculSolde(prixInitial, remise){
    prixfinal = prixInitial * (100-remise)/100;
    alert(prixfinal)
}


var prixInitial = prompt ("Veuillez entrer le prix initial")
var remise = prompt ("Veuillez entrer le montant de la remise")

calculSolde(prixInitial, remise);