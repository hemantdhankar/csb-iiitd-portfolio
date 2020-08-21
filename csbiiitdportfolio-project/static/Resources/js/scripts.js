$(document).ready(function(){
    
/*For the sticky navbar*/

    $('.js--section-intro').waypoint(function(direction){
        
        if(direction=="down"){
            $('nav').addClass('solidbackground');
            $('#navbarCollapse').addClass('solidbackground2');
            $('#navlogo').removeClass('nav-logo');

        }else{
            $('nav').removeClass('solidbackground');
            $('#navbarCollapse').removeClass('solidbackground2');
            $('#navlogo').addClass('nav-logo');
            
        }
    }, {
  offset: '-500px'
});
                              
/*For the scrolling*/
    $('.js--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-about').offset().top},1000)
    });
    $('.js--scroll-to-portfolio').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-portfolio').offset().top},1000)
    });
    $('.js--scroll-to-contactus').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-contactus').offset().top},1000)
    });
    $('.js--scroll-to-home').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-intro').offset().top},1000)
    });
    
/* Fo the navbar */
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }

  });
    
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

    // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

    
/*Animations on scroll*/
    $('.js--wp-1').waypoint(function(directions){
        $('.js--wp-1').addClass('animated fadeInLeft');
    },{
        offset:'600'
    });
    

    $('.js--wp-2').waypoint(function(directions){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset:'600'
    });
    
    $('.js--wp-3').waypoint(function(directions){
        $('.js--wp-3').addClass('animated fadeInRight');
    },{
        offset:'600'
    });

  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

    // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });



    

});



