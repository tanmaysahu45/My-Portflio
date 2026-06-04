

const typed = new Typed('#element', {
  strings: ['Student', " Content creator", 'Web developer.'],
  typeSpeed: 50,
});

new Typed('#about-text', {
    strings: [
        'I am from <spam class="orange">Chhindwara.</spam>\nI am in 12th standard.\nAnd I am a <spam class="Web">Web Developer</spam> learning <spam class="orange"> JavaScript.</spam>'
    ],
    typeSpeed: 40,
    showCursor: false,
    loop: false
    

});


new Typed('#skill-text', {
    strings: [
        '<div class="skill">1. HTML   .<br>2. CSS<br>     3. JavaScript</div>'
    ],
    typeSpeed: 40,
    showCursor: false,
    loop: false,
    contentType: 'html'
});