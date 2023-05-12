var affichage = confirm("Cliquez sur ok ou annuler pour choisir votre affichage");

if(affichage) {
    document.getElementById("title").classList.add("class1")
    document.getElementById("txt").classList.add("class1")
}

else {
    document.getElementById("title").classList.add("class2")
    document.getElementById("txt").classList.add("class2")
}

// plus simplifié avec toggle 


// var affichage = confirm("Cliquez sur ok ou annuler pour choisir votre affichage");

// if(affichage) {
//     document.getElementById("title").classList.toggle("class2")
//     document.getElementById("txt").classList.toggle("class2")
// }
// faudra aussi mettre les class sur le html

