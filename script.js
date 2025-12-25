AOS.init({ duration: 800, once: true });

// Stealth Cursor Logic
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Synced Glitch Logic
const mainName = document.getElementById('main-name');
const forgeLogo = document.getElementById('forge-logo');

function triggerGlobalGlitch() {
    mainName.classList.add('glitch-effect');
    forgeLogo.classList.add('glitch-effect');
    
    setTimeout(() => {
        mainName.classList.remove('glitch-effect');
        forgeLogo.classList.remove('glitch-effect');
    }, 250);
    
    // Interval between 4-8 seconds
    setTimeout(triggerGlobalGlitch, Math.random() * 4000 + 4000);
}

// Boot Sequence Controller
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const videos = document.querySelectorAll('video');

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            triggerGlobalGlitch();
            // Force play all project videos
            videos.forEach(v => {
                v.muted = true;
                v.play().catch(e => console.log("Video Play Blocked"));
            });
        }, 800);
    }, 2500); // Loader visible for 2.5s
});

// Smooth Scroll for Nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});