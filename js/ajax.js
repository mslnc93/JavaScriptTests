// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {

//     if (xhr.readyState == 4) {
//         console.log("Ready !");
//         //Affichage des données dans la console
//         console.log(JSON.parse(xhr.responseText).title);
//         console.log(JSON.parse(xhr.responseText).userId);
//         //Affichage des données sur la page HTML
//         document.getElementById("reception").innerHTML = JSON.parse(xhr.responseText).title + "<br>"
//             + JSON.parse(xhr.responseText).userId;

//     }

//     else {
//         console.log("Waiting...");
//     }
// }

// xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/10', true);
// xhr.send(null);

var xhr = new XMLHttpRequest();

var film = prompt("Entrer un film");
var annee = prompt("Entrer l'année de sortie")

xhr.onreadystatechange = function () {

    if (xhr.readyState == 4) {
        {
            document.getElementById("titre").innerHTML = JSON.parse(xhr.responseText).Title;
            document.getElementById("reception").innerHTML = "Année de sortie : " + 
                                                            JSON.parse(xhr.responseText).Year;
            document.getElementById("image").innerHTML = "<img src="
                                                            +JSON.parse(xhr.responseText).Poster+" alt='Affiche du film' />"                                                
        }
    }

    else {
        console.log("Waiting...");
    }
}

xhr.open("GET", 'https://www.omdbapi.com/?t='+film+'&apikey=8723f6a6&y'+annee, true);
xhr.send(null);