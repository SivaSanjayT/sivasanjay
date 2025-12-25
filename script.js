AOS.init({ duration: 1000 });

// Stealth Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Force Video Playback
window.addEventListener('load', () => {
    const vids = document.querySelectorAll('video');
    vids.forEach(v => {
        v.muted = true;
        v.play().catch(() => console.log("Video waiting for interaction"));
    });
});

// Random Glitch Controller
const nameEl = document.querySelector('.glitch-name');
const forgeEl = document.querySelector('.forge-glitch');

function triggerGlitches() {
    if(Math.random() > 0.5) nameEl.classList.add('glitch-active');
    if(Math.random() > 0.8) forgeEl.style.textShadow = "2px 0 #bc13fe";
    
    setTimeout(() => {
        nameEl.classList.remove('glitch-active');
        forgeEl.style.textShadow = "none";
    }, 200);
    
    setTimeout(triggerGlitches, Math.random() * 5000 + 3000);
}
triggerGlitches();