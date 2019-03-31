
// On mouse click;
function soundA(){
	document.getElementById('sound_A').play();
}

function soundS() {
	document.getElementById('sound_S').play();
}

function soundD() {
	document.getElementById('sound_D').play();
}

function soundF(){
	document.getElementById('sound_F').play();
}

function soundG() {
	document.getElementById('sound_G').play();
}

function soundH() {
	document.getElementById('sound_H').play();
}

function soundJ() {
	document.getElementById('sound_J').play();
}

function soundK() {
	document.getElementById('sound_K').play();
}
let pianoButtonA = document.getElementById('button-A').addEventListener('click', soundA)
let pianoButtonS = document.getElementById('button-S').addEventListener('click', soundS)
let pianoButtonD = document.getElementById('button-D').addEventListener('click', soundD)
let pianoButtonF = document.getElementById('button-F').addEventListener('click', soundF)
let pianoButtonG = document.getElementById('button-G').addEventListener('click', soundG)
let pianoButtonH = document.getElementById('button-H').addEventListener('click', soundH)
let pianoButtonJ = document.getElementById('button-J').addEventListener('click', soundJ)
let pianoButtonK = document.getElementById('button-K').addEventListener('click', soundK)



// Press on buttons (A-K);

document.addEventListener('keydown', function(press){
	switch (press.keyCode){
		case 65:
			document.getElementById('sound_A').play();
			break;
		case 83:
			document.getElementById('sound_S').play();
			break;
		case 68:
			document.getElementById('sound_D').play();
			break;
		case 70:
			document.getElementById('sound_F').play();
			break;
		case 71:
			document.getElementById('sound_G').play();
			break;
		case 72:
			document.getElementById('sound_H').play();
			break;
		case 74:
			document.getElementById('sound_J').play();
			break;
		case 75:
			document.getElementById('sound_K').play();
			break;
	}
});



