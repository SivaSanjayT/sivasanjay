AOS.init({ duration: 1000, once: true });

// Cursor Follow
const cursor = document.querySelector('.custom-cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Glitch Control
const nameEl = document.querySelector('.glitch-name');
function doGlitch() {
    nameEl.classList.add('glitch-active');
    setTimeout(() => nameEl.classList.remove('glitch-active'), 250);
    setTimeout(doGlitch, Math.random() * 5000 + 4000); // 4-9 sec delay
}
doGlitch();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});