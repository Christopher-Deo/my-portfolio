// sets up the callback function to run on page load
$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });
    //adding in the Typed.js library for the hero section
    const typed = new Typed(".typed", {
        strings: ["Front End Developer", "Web Developer", "Software Engineer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    })
    //adding the owl carousel for skills section
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
          928: {
                items: 4
            }
        }
    });
    //adding easy pie charts plugin
    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        lineCap: 'butt',
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    //setting pie chart animation to start when in view
    let skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 400) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });


        }


    });


});
