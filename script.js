var body = document.getElementById("gradient"); //Body of webpage to display gradient.
var color1 = document.querySelector(".color1"); //The color1 input box.
var color2 = document.querySelector(".color2"); //The color2 input box.
var btnRandom = document.querySelector(".btnRandom"); //The btnRandom button.
var css = document.querySelector("h3"); //The h3 element to display font color.

// console.log (window.getComputedStyle(document.body, null).background);
// console.log (getComputedStyle(document.body, null).getPropertyValue("background"));

function setGradient() { //Sets background-color based on input boxes.
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
	//console.log (body.style.background);
}

function setRandomGradient() { //Sets background-color with 2 random colors.
	color1.value = getRandomColor(); //Changes value of color1 input box to a random color.
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() { //Returns a random color in format #FF00FF.
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient); //Listens for Input from color1 input box.

color2.addEventListener("input", setGradient); //Listens for Input from color2 input box.

btnRandom.addEventListener("click", setRandomGradient); //Listens for Click from btnRandom.
