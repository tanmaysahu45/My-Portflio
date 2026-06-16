// ========================================================
// 1. HERO HOME SECTION - TITLE TYPING EFFECT
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
// 2. ABOUT BOX DYNAMIC MATRIX
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