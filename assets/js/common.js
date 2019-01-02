$(document).ready(function() {
  $("#my-menu").mmenu({
    extensions: [ 'effect-menu-slide', 'pagedim-black', "fx-listitems-fade", 'position-right' ],
    navbar: {
      //title: '<img src="/assets/img/main/logo-1.png">'
    },
  }, {
     // configuration
     offCanvas: {
        pageSelector: "#my-page"
     }
  });

  var api = $('#my-menu').data('mmenu');
  api.bind('open:start', function() {
    $('.hamburger').addClass('is-active');
  });
  api.bind('close:before', function() {
    $('.hamburger').removeClass('is-active');
    })
 });




 $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
  })
});

