const pianoItem = document.querySelectorAll('.item');
console.log(pianoItem);

let pianoButtonA = document.getElementById('sound_A');
console.log(pianoButtonA);
let pianoButtonS = document.getElementById('sound_S');
let pianoButtonD = document.getElementById('sound_D');
let pianoButtonF = document.getElementById('sound_F');
let pianoButtonG = document.getElementById('sound_G');
let pianoButtonH = document.getElementById('sound_H');
let pianoButtonJ = document.getElementById('sound_J');
let pianoButtonK = document.getElementById('sound_K');

pianoItem.forEach(item => {			
	item.addEventListener('click', function playAudio() {
		pianoButtonA.play();
		pianoButtonS.play();
		pianoButtonD.play();
		pianoButtonF.play();
		pianoButtonG.play();
		pianoButtonH.play();
		pianoButtonJ.play();
		pianoButtonK.play();		
	})
	return 		
});

function press_button(){
	console.log('You press F button');
}


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



