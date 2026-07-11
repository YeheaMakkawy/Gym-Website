document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.trainer');

    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('is-hidden', !match);
            });
        });
    });

});