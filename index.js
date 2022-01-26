//  fill images in button
const mappingButtons = {
	w: {
		image: 'images/tom1.png',
		sound: 'sounds/tom-1.mp3',
	},
	a: {
		image: 'images/tom2.png',
		sound: 'sounds/tom-2.mp3',
	},
	s: {
		image: 'images/tom3.png',
		sound: 'sounds/tom-3.mp3',
	},
	d: {
		image: 'images/tom4.png',
		sound: 'sounds/tom-4.mp3',
	},
	j: {
		image: 'images/snare.png',
		sound: 'sounds/snare.mp3',
	},
	k: {
		image: 'images/crash.png',
		sound: 'sounds/crash.mp3',
	},
	l: {
		image: 'images/kick.png',
		sound: 'sounds/kick-bass.mp3',
	},
};

const allDrums = document.querySelectorAll('.drum');

function playDrum(event) {
	console.log(event.target);
}

for (let drum of allDrums) {
	const letter = drum.textContent;
	const imageUrl = mappingButtons[letter].image;
}
