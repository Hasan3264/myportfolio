$(function(){
    'use strict'
    //typed js
    var typed = new Typed('.element', {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of element containing string children
         */
        strings: [
        '',
        'Mahmudul Hassan',
        'Full stack Developer',
        'Create Responsive',
        'Web Site and',
        'Develope them',
        ],
        stringsElement: null,
      
        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 100,

        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 50,
      
        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,
      
      
        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 700,
    
        loop: true,
        loopCount: Infinity,
      
        showCursor: false,
        cursorChar: '|',
        autoInsertCss: true,
      
      });
      //manu fix
      var navOff = $('.navigation').offset().top;

      $(window).scroll(function () {
  
          var scrolling = $(this).scrollTop();
  
          if (scrolling > navOff) {
              $('.navigation').addClass('manu-fix');
          } else {
              $('.navigation').removeClass('manu-fix');
          }
      });
      //skill slider
      $('.skill-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

    //back to top
    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    });

    $(window).scroll(function () {
        var scrolling2 = $(this).scrollTop();

        if (scrolling2 > 150) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });
      
});