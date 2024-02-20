const menu = document.querySelector('.menu');
const html = document.querySelector('html');


function toggleMenu() {
    menu.classList.toggle('open');
    html.classList.toggle('hidden');
}