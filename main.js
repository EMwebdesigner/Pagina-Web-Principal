const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const nav = document.querySelector('#nav');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});



//------------------ Efecto del Hero section -------------------------

// JavaScript para activar la animación
document.addEventListener('DOMContentLoaded', function() {
    const imagenHero = document.getElementById('imagen-hero');
    const textoHero = document.getElementById('texto-hero');
    
    // Función para verificar si el elemento está visible
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para animar los elementos
    function animateHero() {
        if (isInViewport(imagenHero) || window.scrollY < 100) {
            imagenHero.classList.add('animate');
            textoHero.classList.add('animate');
            // Remover el listener después de animar
            window.removeEventListener('scroll', animateHero);
        }
    }
    
    // Animar inmediatamente si ya está visible
    setTimeout(() => {
        animateHero();
    }, 100);
    
    // También verificar en scroll por si el usuario recarga a mitad de página
    window.addEventListener('scroll', animateHero);
});
    