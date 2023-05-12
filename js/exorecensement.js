var annee = prompt("Merci d'entrer votre annéede naissance")

var diff = 2023 - annee;

var gap = 16 - diff

if(diff >= 16) {
    alert("Faites votre recensement");
}
else {
    alert("Vous devez faire votre recensement dans " + gap + " ans ");
}


