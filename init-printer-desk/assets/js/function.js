jQuery(document).ready(function() {

    // Sticky Header
    
    $(window).scroll(function() 
    {
     if ($(this).scrollTop() > 1)
     {
      $('#header').addClass("sticky_header");
     }
     else
     {
      $('#header').removeClass("sticky_header");
     }
    });
    
    // 

    // Tabs
    jQuery('.box-menu a').on('click', function(e) {
      var currentAttrValue = jQuery(this).attr('href');
      jQuery('.tab-content ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
      jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    }); 
    jQuery('.openit').click(function(i) {
      jQuery('#modal-1, #modal-2').addClass('inAnimation');
      jQuery('#modal-1, #modal-2').removeClass('outAnimation');
      jQuery('.box-menu ul li:first-child').addClass('active');
      jQuery('.box').hide();
      jQuery('.box#start').show();
      jQuery('.openit').fadeOut(200);
    });

    // Fancy Box
    $(".fancybox").fancybox({
    loop: true,
    buttons: [
      "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ],
        animationEffect: "zoom-in-out" ,
        transitionEffect: "circular"  
  });
  // Fancy Box Ends

  // Tabs Ends

  // Services Slider
  $('#services_slider').slick({
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // Services Slider Ends


  // Testimonial Slider

  $('#test-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToShow: 1,
        autoplay: false,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // Testimonial Slider Ends
  // Counter
    var a = 0;
    $(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 10000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
  });
  // Counter Ends
  // Body Class  
  
   var newClass = $(document).attr('title');
    newClass = newClass.substring(newClass.lastIndexOf('|')+1);
    $('body').addClass(newClass);
        
  //
});  