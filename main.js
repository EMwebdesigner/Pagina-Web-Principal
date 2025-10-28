const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const nav = document.querySelector('#nav');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});