var b = document.getElementById("ball");

document.addEventListener("click", function (event) {

    b.style.transform = "translateX(" + (event.clientX-25) + "px)"
        + "translateY(" + (event.clientY-25) + "px)";
        b.style.transition = "transform 1s";

})