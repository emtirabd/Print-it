const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
] 

// RECUPERATION DES ELEMENTS DU DOM
let dots = document.querySelector('#banner .dots');
let tagLine = document.querySelector('#banner p');
let image = document.querySelector('#banner .banner-img');

let arrow_left = document.querySelector('#banner .arrow_left');
let arrow_right = document.querySelector('#banner .arrow_right');

// AJOUT DES ECOUTEURS
arrow_left.addEventListener('click', slideLeft);
arrow_right.addEventListener('click', slideRight);

// VARIABLES GLOBALES
let imagePath = "./assets/images/slideshow/";
let activeStep = 0
let limit = slides.length - 1

function slideLeft() {
    activeStep -= 1;
    updateActiveStepVariable();
	updateView();
}

function slideRight() {
    activeStep += 1;
    updateActiveStepVariable();
    updateView();
}

function updateActiveStepVariable() {
	if (activeStep > limit) {
        activeStep = 0;
    } else if (activeStep < 0) {
        activeStep = limit;
    }
}

function updateView() {
    image.src = imagePath + slides[activeStep].image;
    tagLine.innerHTML = slides[activeStep].tagLine;
    updateDots();
}

function updateDots() {
    let dotsList = document.querySelectorAll('.dot');
    dotsList.forEach((dot, key) => {
        if (key === activeStep) {
            dot.classList.add('dot_selected')
        } else {
            dot.classList.remove('dot_selected')
        }
    })
}


function initDots() {
    slides.forEach((slide, key) => {
        let dot = document.createElement('div');
        dot.classList.add('dot')
        if (key === 0) {
            dot.classList.add('dot_selected')
        }

        dots.appendChild(dot)
    })
}

initDots()