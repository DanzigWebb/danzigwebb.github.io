$(document).ready(function() {
  $("#my-menu").mmenu({
    extensions: [ 'effect-menu-slide', 'pagedim-black', "fx-listitems-fade", 'position-right', 'theme-dark' ],
    navbar: {
      title: 'WebRunn'
    },
    "counters": true,
               "iconbar": {
                  "add": true,
                  "top": [
                     "<a href='/'><i class='fa fa-home'></i></a>",
                  ],
                  "bottom": [
                     "<a href='https://vk.com/id128989093' target='_blank'><i class='fab fa-vk'></i></a>",
                     "<a href='#/'><i class='fas fa-envelope'></i></a>",
                     "<a href='https://api.whatsapp.com/send?phone=79500247418' target='_blank'><i class='fab fa-whatsapp'></i></a>"
                  ],
                }
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
            items:1,
            nav:true
        },
        400:{
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
    },
  })
});

