
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelector('.sliders'); // Conteneur des slides
    const slides = document.querySelectorAll('.slide'); // Tous les slides
    const slideCount = slides.length; // Nombre total de slides
    let currentIndex = 0; // Slide actuel
    let slideDirection = 1; // Direction du défilement : 1 (vers la droite) ou -1 (vers la gauche)

    const showSlide = (index) => {
        const offset = -index * 100; // Décalage du conteneur
        sliders.style.transform = `translateX(${offset}%)`;
    };

    const autoSlide = () => {
        currentIndex += slideDirection;

        // Changer de direction si nous atteignons les extrémités
        if (currentIndex >= slideCount) {
            currentIndex = slideCount - 2;
            slideDirection = -1; // Inverse la direction (vers la gauche)
        } else if (currentIndex < 0) {
            currentIndex = 1;
            slideDirection = 1; // Inverse la direction (vers la droite)
        }

        showSlide(currentIndex);
    };

    // Boutons "next" et "prev"
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // Avancer indéfiniment
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount; // Avancer au prochain slide
        slideDirection = 1; // Forcer la direction vers la droite
        showSlide(currentIndex);
    });

    // Reculer indéfiniment
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount; // Reculer au slide précédent
        slideDirection = -1; // Forcer la direction vers la gauche
        showSlide(currentIndex);
    });

    // Défilement automatique toutes les 3 secondes
    setInterval(autoSlide, 5000); // Intervalle de 5 secondes pour l'auto-défilement
});
// showImage(index);