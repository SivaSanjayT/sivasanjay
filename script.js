// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle (add a button with id="darkModeToggle" in your HTML to use this)
const toggleButton = document.getElementById('darkModeToggle');
if(toggleButton){
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
