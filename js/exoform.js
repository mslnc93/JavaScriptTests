document.getElementById("commentaire").addEventListener("input", function() {
    var maxLength = this.getAttribute("maxLength");
    var currentLength = this.value.length;
    if (currentLength >= maxLength) {
        document.getElementById("commentaire").style.borderColor = "red";
        alert("Vous avez atteint le nombre maximum de caractères.");
    }
    else{
        document.getElementById("paragraphe").innerHTML = maxLength - currentLength +  "caractères restants ";
    }
})

document.getElementById("inputEmail").addEventListener("input", function(){
    if(this.value.includes(".")){
        this.style.color = "green";
    }
    else{
        this.style.color = "red";
    }
});

document.getElementById("inputNom").addEventListener("input", control);
document.getElementById("inputPrenom").addEventListener("input", control);

function control(){
    var currentLength = this.value.length;
    if(currentLength < 5){
        this.style.color = "red";
    }
    else{
        this.style.color = "green";
    }
}