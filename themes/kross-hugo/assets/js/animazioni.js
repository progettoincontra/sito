(function ($) {
    'use strict';
    var slideUp = {
        duration: 1500,
        distance: '150%',
        origin: 'bottom',
        opacity: 0,
    };
    ScrollReveal().reveal('.headline', slideUp);


    var loc = window.location;
    console.log(loc);

    $('.navbar-nav').find('a').each(function() {
        console.log($(this).attr('href'));

      if ($(this).attr('href') == loc || $(this).attr('href')+"/" == loc) {
          $(this).parent().addClass("active");
      }
   });
})(jQuery);
