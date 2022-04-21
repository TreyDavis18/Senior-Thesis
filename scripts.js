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

