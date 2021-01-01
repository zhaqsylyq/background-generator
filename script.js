var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //Note the syntax
var color2 = document.querySelector(".color2"); //Note the syntax
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";"; //textContent
}

color1.addEventListener("input", setGradient); //"input"
color2.addEventListener("input", setGradient);