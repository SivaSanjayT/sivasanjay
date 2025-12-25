// Initialization
AOS.init({ duration: 1000, once: true });

// Stealth Cursor Logic
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Force Video Playback (Essential for Chrome/Safari)
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Ensure muted is true for autoplay to work
        video.muted = true;
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log("Autoplay started");
            }).catch(error => {
                console.log("Autoplay prevented, trying on user click.");
            });
        }
    });
});

// Random Glitch Controller
const nameEl = document.querySelector('.glitch-name');
function doGlitch() {
    nameEl.classList.add('glitch-active');
    setTimeout(() => nameEl.classList.remove('glitch-active'), 200);
    // Long random delay 4-8 seconds
    const delay = Math.random() * 4000 + 4000;
    setTimeout(doGlitch, delay);
}
doGlitch();

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});