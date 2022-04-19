//Function for card flip
const card = document.querySelectorAll('.card__inner');

card.forEach((card) => card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
}));

//Function for parallax
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.7 + 'px)';
});

//Function for modal

// const open = document.getElementById('open');
// const modal = document.getElementById('modal_container');
// const close = document.getElementById('close');

// open.addEventListener('click', () => {
//     modal_container.classList.add('show');
// });

// close.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// });