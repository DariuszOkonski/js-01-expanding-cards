const cards = document.querySelectorAll('.card');

console.log(cards)

cards.forEach(card => {
    card.addEventListener('click', () => {

        clearActive();

        card.classList.add('active');

    })
});

function clearActive() {
    cards.forEach(card => {
        if(card.classList.contains('active'))
            card.classList.remove('active');
    })
}