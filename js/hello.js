var mavariable = "MaPremièreVariable";

var lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."+
"Perspiciatis quod porro molestiae. Rerum mollitia molestiae distinctio,"+
"atque dolorem natus odit at, placeat nihil delectus aliquid! Voluptas quo"
//le + nous permet de faire suivre les mots à la suite sans avoir d'erreur en revenant à la ligne//

alert("Hello world");

alert(lorem); //il affiche donc le nom de la variable plus haut//

var nbVar=1, strVar= "Hello", boolOk = true;

alert("nombre: " + nbVar + " de type: " + typeof(nbVar)+
"\nchaîne de caractères : " + strVar + " de type : " + typeof(strVar) + 
"\nBoolean : " + boolOk + " de type : " + typeof(boolOk)
);

var valueUser = prompt("Merci d'entrer une valeur");
alert("Vous avez entré la valeur: " + valueUser)

var confirmation = confirm("Merci d'accepter ou de refuser");
alert("confirmation utilisateur : " + confirmation);

var username = prompt("Merci d'entrer votre nom d'utilisateur");
alert("Bonjour " +  username)
//console.log(username); Permet de faire la connexion avec la console du navigateur

document.write("Bonjour " + username);

document.getElementById("demo").innerHTML = "<h1>Bienvenue à tous</h1>"

var number=0;

//pré incrémentation
alert(++number);
alert(number);

//post incrémentation
alert(number++);
alert(number);


var txt = "ABCDEFGHIJKLMNOPQRSTUVWXZ";

var sln = txt.length;

var text1 = "Hello world !"


alert(text1.toUpperCase())//majuscule
alert(text1.toLowerCase()) //minuscule
alert(text1.charAt(0)) //permet d'afficher seulement la première lettre du mot (1 char = 1 lettre)-

