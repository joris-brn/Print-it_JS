// TABLEAU 

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
// VARIABLES

let selectedSlide = 0; // Suivi de l'index
const banner = document.querySelector('.banner-img') // Déclaration de la variable pour les images
const tagLine = document.querySelector('p') // Déclaration de la variable pour le texte
const divDots = document.querySelector('.dots') // Déclaration de la variable de la div .dots

// Fonction pour la mise à jour du Slide (DOT_SELECTED + DONNEES) 

function upSlide() {
	const slide = slides[selectedSlide] // Récupère les infos de la slide correspondant à l'index selectedSlide
	banner.src = "./assets/images/slideshow/" + slide.image // Applique image correspondante
	tagLine.innerHTML = slide.tagLine // Applique tagline correspondant
	const dots = divDots.querySelectorAll('.dot'); // Selectionne la div .dot
	dots.forEach((dot, i) => { // Applique une boucle avec .dot et l'index i
		if (i === selectedSlide) { // Si l'index i correspond à la slide selectionné
			dot.classList.add('dot_selected'); // Alors on applique la classe CSS .dot_selected
		} else {
			dot.classList.remove('dot_selected'); // Sinon, on supprime la classe CSS .dot_selected	
		}
});
}

// VERIFICATION DES FLECHES L/R ET MISE EN PLACE FONCTION UPSLIDE // 

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(affichagelogL) {
selectedSlide--; // Slide précédente
	if (selectedSlide < 0) { // Si la slide est active est inférieur à 0
		selectedSlide = slides.length - 1; // la slide affiché doit être la dernière du tableau
	}
	upSlide() // Applique la fonction upSlide
});

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function(affichagelogR) {
selectedSlide++; // Slide suivante
	if (selectedSlide >= slides.length) { // Si la slide active est supérieur à la longueur du tableau "slide"
		selectedSlide = 0 // La slide active revient au départ du tableau
	}
	upSlide() // Applique la fonction upSlide
});

// SELECTION DE LA LISTE "slides" ET DUPLICATION DE LA DIV .DOT //

for (let i = 0; i < slides.length; i++) {  // Boucle tant que i < longueur de slides, et incrémentation
	const createDivDot = document.createElement("div"); // Creation de la div pour les .dot
	createDivDot.className = "dot dot"+i; // Classe pour divDot
	if ( i === 0 ){
		createDivDot.className = "dot " + "dot"+i + " dot_selected"; // Si i=0, alors ajout de la class .dot_selected
	} 
	divDots.append(createDivDot); // ajout de divDot dans conteneur divDots
}

