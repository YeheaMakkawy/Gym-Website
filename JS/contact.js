document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const question = item.querySelector('.faq-q');
        const answer = item.querySelector('.faq-a');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            items.forEach(other => {
                other.classList.remove('open');
                other.querySelector('.faq-a').style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

});