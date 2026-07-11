document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('billingSwitch');
    if (!toggle) return;

    const monthlyLabel = document.querySelector('[data-label="monthly"]');
    const annualLabel = document.querySelector('[data-label="annual"]');
    const amounts = document.querySelectorAll('.amount');
    const periodLabels = document.querySelectorAll('.price > p');

    let isAnnual = false;

    toggle.addEventListener('click', () => {
        isAnnual = !isAnnual;

        toggle.classList.toggle('is-annual', isAnnual);
        toggle.setAttribute('aria-checked', String(isAnnual));

        monthlyLabel.classList.toggle('on', !isAnnual);
        annualLabel.classList.toggle('on', isAnnual);

        amounts.forEach(el => {
            el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
        });

        periodLabels.forEach(el => {
            el.textContent = isAnnual ? 'per month, billed annually' : 'per month';
        });
    });
});