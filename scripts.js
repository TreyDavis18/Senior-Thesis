//Function for card flip
const card = document.querySelectorAll('.card__inner');

card.forEach((card) => card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
}));

//Function for parallax
