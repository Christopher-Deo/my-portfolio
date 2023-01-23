// sets up the callback function to run on page load
$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });
    const typed = new Typed(".typed", {
        strings: ["Front End Developer", "Web Developer", "Software Engineer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    })
});

