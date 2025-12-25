AOS.init({ duration: 800, once: true });

// Gaming Cursor Logic
const cursor = document.querySelector('.custom-cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Random Glitch Logic for Siva Sanjay
const nameElement = document.querySelector('.glitch-name');
function triggerGlitch() {
    nameElement.classList.add('glitch-active');
    setTimeout(() => {
        nameElement.classList.remove('glitch-active');
    }, 250); 
    
    // Delay between glitches (Long: 4 to 9 seconds)
    const nextGlitch = Math.random() * 5000 + 4000;
    setTimeout(triggerGlitch, nextGlitch);
}
triggerGlitch();

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(link.hash !== "") {
            e.preventDefault();
            const hash = link.hash;
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
