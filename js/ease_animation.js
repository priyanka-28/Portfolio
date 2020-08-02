// Scroll to top button appear
// $(document).on('scroll', function() {
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance > 100) {
//       $('.scroll-to-top').fadeIn();
//     } else {
//       $('.scroll-to-top').fadeOut();
//     }
//   });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollBottom: ($($anchor.attr('href')).offset().bottom)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });