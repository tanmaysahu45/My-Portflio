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
// 2. SCROLLSPY - FIXED FLUID COLOR SWITCHER CALCULATION
// ========================================================
const sections = document.querySelectorAll('.target-section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSectionId = 'home';
    
    // Exact view detection engine based on screen bounding client viewports
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Checking if section top is near or crossing header boundary view zone
        if (rect.top <= 160) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Code forcefully catches bottom hit to highlight 'Contact' without delay
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        currentSectionId = 'contact';
    }

    // Swapping classes
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