AOS.init({ duration: 1000, once: true });

// Custom Cursor
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.style.left = e.clientX + 'px';
    outline.style.top = e.clientY + 'px';
});

// Random Glitch Logic
const nameElement = document.querySelector('.glitch-name');
function triggerGlitch() {
    nameElement.classList.add('glitch-active');
    setTimeout(() => {
        nameElement.classList.remove('glitch-active');
    }, 300); // Duration of glitch
    
    // Random long delay between 3 to 7 seconds
    const nextGlitch = Math.random() * 4000 + 3000;
    setTimeout(triggerGlitch, nextGlitch);
}
triggerGlitch();

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
