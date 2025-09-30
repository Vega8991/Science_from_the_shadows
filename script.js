document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-custom');

    cards.forEach(card => {
        const buttons = card.querySelectorAll('.card-button');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                card.classList.toggle('flipped');
            });
        });
    });
});