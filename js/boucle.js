// var i = 0

// while (i<10){
//     document.write( "Salut tout le monde");
//     i++;
// }

//Simplifier le while ci dessus avec la boucle for :

// var i;
// for (i = 0; i < 10; i++) {
//     document.write("Salut tout le monde")
// }

// exemple de boucle avec while

var age = prompt("Quel âge avez-vous ?");

var confirmation = confirm(age + " ans ?");

while (confirmation == false) {
    age = prompt("Ressaisir votre âge");
    confirmation = confirm(age + " ans ?");
}

document.write(age);

// La même chose avec un do while

do {
    var age = prompt("Quel âge avez-vous ?");

    var confirmation = confirm(age + " ans ?");
} while (confirmation == false);

//exo avec while et do while

var age = prompt("Quel âge avez-vous ?");

while (age < 12) {
    age = prompt("Quel âge avez-vous ?");
}

//Do while

do {
    var age = prompt("Quel est votre âge ?")
} while (age < 12)

//Dans cet exemple, l'utilisateur sera dans une boucle s'il a en dessous de 12ans