var age = prompt("Veuillez entrer votre âge.")

var confirmation = confirm(age + " ans ?")

if(confirmation) {
    alert("Merci d'avoir entré votre âge !")
}
 else{
    age = prompt("Veuillez ressaisir votre âge")
 }

 document.write(age);