AOS.init({ duration: 800, once: true });

// Stealth Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Sync Glitches
const mainName = document.getElementById('main-name');
const forgeLogo = document.getElementById('forge-logo');

function triggerGlitch() {
    mainName.classList.add('glitch-effect');
    forgeLogo.classList.add('glitch-effect');
    setTimeout(() => {
        mainName.classList.remove('glitch-effect');
        forgeLogo.classList.remove('glitch-effect');
    }, 250);
    setTimeout(triggerGlitch, Math.random() * 4000 + 4000);
}

// Boot Sequence
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const videos = document.querySelectorAll('video');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            triggerGlitch();
            videos.forEach(v => { v.muted = true; v.play(); });
        }, 800);
    }, 2500);
});