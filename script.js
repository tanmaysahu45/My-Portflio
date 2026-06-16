// ========================================================
// 1. MOBILE NAVBAR HAMBURGER DROPDOWN LOGIC
// ========================================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================================
// 2. SCROLLSPY - ACTIVE SECTION NAVBAR COLOR SWITCHER
// ========================================================
const sections = document.querySelectorAll('.target-section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Window scroll offset detection mechanism with 120px threshold margin
        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Remove active class from all items and add to the current viewing section link
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active');
        }
    });
});

// ========================================================
// 3. HERO HOME SECTION - TITLE TYPING EFFECT
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
// 4. ABOUT BOX DYNAMIC MATRIX
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