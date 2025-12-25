AOS.init({ duration: 800, once: true });

// Stealth Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Force Video Playback on Load
window.addEventListener('load', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
        v.muted = true;
        v.play().catch(err => console.log("Autoplay blocked, user interaction needed."));
    });
});

// Synchronized Name & Logo Glitch
const nameNode = document.getElementById('main-name');
const forgeNode = document.getElementById('forge-logo');

function startGlitchCycle() {
    nameNode.classList.add('glitch-effect');
    forgeNode.classList.add('glitch-effect');
    
    setTimeout(() => {
        nameNode.classList.remove('glitch-effect');
        forgeNode.classList.remove('glitch-effect');
    }, 250);
    
    // Cycle delay: 4 to 8 seconds
    const nextInterval = Math.random() * 4000 + 4000;
    setTimeout(startGlitchCycle, nextInterval);
}

startGlitchCycle();

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});