// Add your JavaScript here
$(document).ready(function(){
    $('#menu').click(function(){
        $('.navbar').toggleClass('active');
    });

    // Initialize Typed.js
    var options = {
        strings: ["Python Development", "AI/ML", "Backend Development"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed(".typing-text", options);
});
