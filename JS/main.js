// ============================
// Mobile Menu
// ============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// ============================
// Close Menu After Click
// ============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ============================
// Header Shadow on Scroll
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.boxShadow = "none";
    }

});

// ============================
// Reveal Animation
// ============================

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* ===========================================================
   Pricing JS
=========================================================== */
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