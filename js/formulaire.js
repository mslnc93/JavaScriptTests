// function controle(event) {
//     var test = document.getElementById("inputText").value;
//     // alert("Vous avez tapé " + test);

//     document.getElementById("outputText").value = test;
// }

// var sentence = "Hello@world.com";
// var word = "@";

// if (sentence.includes(word)) {
//     console.log("Email valide " + word);
// }
// else{
//     console.log("Email non valide " + word);
// }

// let nombre = 12;

// if(isNaN(nombre)) {
//     console.log("Cette variable n'est pas un nombre");
// }

// else{
//     console.log("Cette variable est un nombre");
// }

document.getElementById("myTextArea").addEventListener("input", function(){
    var maxLength = this.getAttribute("maxLength");
    var currentLenght = this.value.length; //nombre de caracteres entré par l'utilisateur
    
    if(currentLenght >= maxLength) {
        document.getElementById("nbrcar").innerHTML = "Vous avez atteint le nombre maximal de caractères"

    }   
    else{
        document.getElementById("nbrcar").innerHTML = maxLength - currentLenght + "caractères restants";
    }
})