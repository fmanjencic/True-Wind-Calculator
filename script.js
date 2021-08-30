var shipsCourse = document.getElementById('shipsCourse');
var shipsSpeed = document.getElementById('shipsSpeed');
var relativeWindSpeed = document.getElementById('relativeWindSpeed');
var relativeWind = document.getElementById('relativeWind');
var trueWindFinal = document.getElementById('trueWindFinal');
var calcButton = document.getElementById('calc-button');
var resetButton = document.getElementById('reset-button')
var finalValue = document.getElementById('finalValue');

var pi = Math.PI;


shipsCourse.defaultValue = 0;
shipsSpeed.defaultValue = 10;
relativeWindSpeed.defaultValue = 14;
relativeWind.defaultValue = 30;

function calculate() {

var final = relativeWind.value * (pi/180);
var trueWindSpeed = Math.sqrt((Math.pow(relativeWindSpeed.value, 2) + Math.pow(shipsSpeed.value, 2))-(2*relativeWindSpeed.value*shipsSpeed.value*Math.cos(final)));

trueWindFinal.textContent = trueWindSpeed;

var preBeta = Math.acos((Math.pow(trueWindSpeed,2) + Math.pow(shipsSpeed.value,2) - Math.pow(relativeWindSpeed.value,2))
	/(2*trueWindSpeed*shipsSpeed.value))

var betaFinal = preBeta * (180/pi);

var trueWind;
if (relativeWind.value < 180) {
	trueWind = 180 - betaFinal;
} else {
	trueWind = 180 + betaFinal
}

if (trueWind + shipsCourse.value < 360) {
	trueWind = trueWind;
} else {
	trueWind = (trueWind + shipsCourse.value) - 360;
}

finalValue.textContent = trueWind;

}

function reset()
 {
 	finalValue.textContent = '';
 	trueWindFinal.textContent = "";
 	shipsCourse.value = "";
 	shipsSpeed.value="";
 	relativeWindSpeed.value = "";
 	relativeWind.value ='';
 }

calcButton.addEventListener("click", calculate);
resetButton.addEventListener("click", reset);