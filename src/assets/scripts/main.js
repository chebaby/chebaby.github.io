$(document).ready(function () {
    'use strict';
    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    //********* typed js

    var element = $(".text-affect");

    $(function(){
       element.typed({
           strings: ["Back-end Developer.", "Front-end Enthusiastic", "Freelancer."],
           loop: true,
           typeSpeed: 90
       });
    });

    //*********wow js

    const WOW = require('wowjs');

    new WOW.WOW().init();

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });


    //****** magnific popup

    $('.view').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    //*** Services carousel

    $("#services-carousel").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 500,
        autoplay: true,
        singleItem: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            680:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //************* Owl Carousel

    $("#testimonial-slider").owlCarousel({
        items: 1,

        itemsDesktop: [1000, 1],

        itemsDesktopSmall: [979, 1],

        itemsTablet: [768, 1],

        pagination: true,

        navigation: false,

        slideSpeed: 1000,

        singleItem: false,

        autoplay: true,

        loop: true
    });

    // wait for layout calculation to finish
    setTimeout(function () {
        var heights = [];

        var blogCards = document.querySelectorAll('.single-blog');

        blogCards.forEach( function(element, index) {
            heights.push(element.getBoundingClientRect().height);
        });

        function getMaxOfArray(numArray) {
          return Math.max.apply(null, numArray);
        }

        var maxHeight = getMaxOfArray(heights) + 'px';

        blogCards.forEach( function(element, index) {
            element.style.height = maxHeight ;
        });
    }, 3000);
});


// Register the service worker

if ('serviceWorker' in navigator) {

    window.addEventListener('load', () => {

        navigator.serviceWorker.register('sw.js').then(registration => {

            // console.log('SW registered: ', registration);

        }).catch(registrationError => {

            // console.log('SW registration failed: ', registrationError);
        });
    });
}
