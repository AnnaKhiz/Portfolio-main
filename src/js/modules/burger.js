export function burger() {
    document.addEventListener('DOMContentLoaded', (e) => {
        const menuBtn = document.getElementById('callBurger');
        const menu = document.getElementById('burger');
        const bodyElem = document.querySelector('body');
        const menuContainer = document.getElementById('burger-container');

        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('show');
            bodyElem.classList.toggle('fixed');
            menuContainer.classList.toggle('scroll');
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
}
