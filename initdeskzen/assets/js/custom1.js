function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}
// END: RESPONSIVE NAVBAR 

// WOW ANIMATION

new WOW().init();

// WOW ANIMATION


$(function() {
    $('.lazy').lazy({
        effect: 'fadeIn',
    });
});


//------Menu Fixed JS------//

$(window).scroll(function() {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        $('header').addClass('menu_fixed animated fadeInDown');
    } else {
        $('header').removeClass('menu_fixed animated fadeInDown');
    }
});
//------Menu Fixed JS------//



//=========== FLOATING FORM STARTS
$(".clickbutton").click(function() {
    $('.floatbutton').toggleClass("active");
    //$('.crossplus').toggleClass("rotate");
});
//=========== FLOATING FORM ENDS



$('.services-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 775,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});


$('.plate-form').slick({  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  arrows: true,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: false,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 775,
    settings: {
      slidesToShow: 2,
      arrows: false,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  ]
});

$('.plate-form-brand').slick({  
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  arrows: false,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: false,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 775,
    settings: {
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  },
  ]
});


$('.choose_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: false,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});


$('.step_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    dots: false,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});


$('.review_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    dots: false,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});



$('.pakg_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 3000,
    // speed: 2000,
    arrows: true,
    dots: false,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});





// intel Tel Input





if ($(window).innerWidth() <= 751) {

    $('.portfolio_slid').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        arrows: false,
        slidesToShow: 2,
        adaptiveHeight: true
    });

}

