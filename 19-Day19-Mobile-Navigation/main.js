// -- navToggle is a button--
const navToggleBtn = document.querySelector('.nav-toggle');
// -- nav is a separate div containing the whole navbar
const nav = document.querySelector('.nav');


navToggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})