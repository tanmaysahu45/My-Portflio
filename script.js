// ========================================================
// 1. MOBILE NAVBAR HAMBURGER DROPDOWN LOGIC
// ========================================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav');

// Toggle Open/Close on Button Click
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Automatically close menu when any internal navigation link is clicked
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================================
// 2. HERO HOME SECTION - TITLE TYPING EFFECT
// ========================================================
const typed = new Typed('#element', {
  strings: [
    'Student Developer.', 
    'Content Creator.', 
    'Full-Stack Logic Architect.'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// ========================================================
// 3. ABOUT BOX DYNAMIC MATRIX
// ========================================================
new Typed('#about-text', {
  strings: [
      `Based in <span class="orange">Chhindwara.</span><br>Currently maintaining advanced academic models in the 12th standard.<br>I am a core <span class="Web">Web Developer</span> specializing in compiling reactive interfaces, structured coding logic, and algorithmic solutions using modern <span class="orange">JavaScript (ES6+).</span>`
  ],
  typeSpeed: 30,
  showCursor: false,
  loop: false,
  contentType: 'html'
});