// Init AOS Animations
AOS.init({
  duration: 1000,
  once: true,
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Parallax effect for cards based on mouse move
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    // We only apply this to the hero to keep it subtle
    const heroContent = document.querySelector('.hero-content');
    if(heroContent) {
        heroContent.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});
