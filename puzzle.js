var rute1 = document.getElementById('rute1');
var rute2 = document.getElementById('rute2');
var rute3 = document.getElementById('rute3');
var rute4 = document.getElementById('rute4');
var rute5 = document.getElementById('rute5');
var rute6 = document.getElementById('rute6');
var rute7 = document.getElementById('rute7');
var rute8 = document.getElementById('rute8');
var rute9 = document.getElementById('rute9');

var ferdig1 = document.getElementById('ferdig1');
var ferdig2 = document.getElementById('ferdig2');
var ferdig3 = document.getElementById('ferdig3');
var ferdig4 = document.getElementById('ferdig4');
var ferdig5 = document.getElementById('ferdig5');
var ferdig6 = document.getElementById('ferdig6');
var ferdig7 = document.getElementById('ferdig7');
var ferdig8 = document.getElementById('ferdig8');
var ferdig9 = document.getElementById('ferdig9');

var buffer = null;

randomize()

function swapElements(element1, element2) {
	var temp = element1.innerHTML;
	element1.innerHTML = element2.innerHTML;
	element2.innerHTML = temp;
}

function randomize() {
	swapElements(rute4, rute6);
	swapElements(rute3, rute7);
	swapElements(rute4, rute7);
	swapElements(rute6, rute2);
	swapElements(rute9, rute8);
	swapElements(rute1, rute2);
	swapElements(rute7, rute3);
	swapElements(rute1, rute7);
	swapElements(rute2, rute5);
}

function clicked(element) {

    buffer = element;

	if (rute1.innerHTML == '<img src="img/Smiley1.png" alt="1">' &&
		rute2.innerHTML == '<img src="img/Smiley2.png" alt="2">' &&
		rute3.innerHTML == '<img src="img/Smiley3.png" alt="3">' &&
		rute4.innerHTML == '<img src="img/Smiley4.png" alt="4">' &&
		rute5.innerHTML == '<img src="img/Smiley5.png" alt="5">' &&
		rute6.innerHTML == '<img src="img/Smiley6.png" alt="6">' &&
		rute7.innerHTML == '<img src="img/Smiley7.png" alt="7">' &&
		rute8.innerHTML == '<img src="img/Smiley8.png" alt="8">') {
		rute9.innerHTML = '<img src="img/Smiley9.png" alt="9">';
		ferdig1.style.outline = "none";
		ferdig2.style.outline = "none";
		ferdig3.style.outline = "none";
		ferdig4.style.outline = "none";
		ferdig5.style.outline = "none";
		ferdig6.style.outline = "none";
		ferdig7.style.outline = "none";
		ferdig8.style.outline = "none";
		ferdig9.style.outline = "none";

	}
}