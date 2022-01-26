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

//  select all drums in an array
const allDrums = document.querySelectorAll('.drum');

// assign image to each drum
for (let drum of allDrums) {
	const letter = drum.textContent;
	const imageUrl = mappingButtons[letter].image;

	drum.style.backgroundImage = 'url(' + imageUrl + ')';
}

function addAnimation(drum) {
	if (drum) {
		// add class pressed
		drum.classList.add('pressed');

		// play corresponding sound
		const letter = drum.textContent;
		const audioUrl = mappingButtons[letter].sound;
		const audio = new Audio(audioUrl);
		audio.play();
	}
}

function removeAnimation(drum) {
	if (drum) {
		drum.classList.remove('pressed');
	}
}

// add event listener on click
for (let drum of allDrums) {
	drum.addEventListener('mousedown', function (event) {
		addAnimation(event.target);
	});
	drum.addEventListener('mouseup', function (event) {
		removeAnimation(event.target);
	});
}

document.body.addEventListener('keydown', function (event) {
	console.log(event.key);
	const keyPressed = event.key;
	const drum = document.querySelector('.' + keyPressed);
	if (drum) {
		addAnimation(drum);
	}
});

document.body.addEventListener('keyup', function (event) {
	const keyPressed = event.key;
	const drum = document.querySelector('.' + keyPressed);
	if (drum) {
		removeAnimation(drum);
	}
});
