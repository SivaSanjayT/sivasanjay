AOS.init({ duration: 1000, once: true });

// Stealth Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Name & Logo Glitch Logic
const nameEl = document.querySelector('.glitch-name');
const forgeEl = document.querySelector('.forge-glitch');

function applyGlitch(element) {
    element.classList.add('glitch-active');
    setTimeout(() => element.classList.remove('glitch-active'), 250);
}

// Randomly glitch the name and the logo word "FORGE"
setInterval(() => {
    if(Math.random() > 0.7) applyGlitch(nameEl);
    if(Math.random() > 0.85) applyGlitch(forgeEl);
}, 3000);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});