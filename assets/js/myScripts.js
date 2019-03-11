// получение активной ссылки
function takeLink () {
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    let linksUrl = links[i].href;
    if (linksUrl == window.location.href || linksUrl+"/" == window.location.href) {
      links[i].style.color = 'red'
      }
    }
  }
takeLink ();


// сайдбар
function openSidebar () {
  let buttonMenu = document.querySelector('.my-menu-button');
  let sidebar = document.querySelector('.mysidebar');

  buttonMenu.onclick = function(e) {
    // задержка анимации гамбургера
    function openOnClick () {
      buttonMenu.classList.toggle('is-active');

    };
    setTimeout(openOnClick, 400)
    sidebar.classList.toggle('is-active');
  }
}
openSidebar ();

// прилипающее меню

function scrollEvents () {
  let menu = document.querySelector('.header-icons');

  let content = document.querySelector('.main-screen-heading');
  let image = document.querySelector('.main-screen-pic');
  window.onscroll = function(e) {
    let scroll = window.scrollY;
    if (scroll >= 300) {
      menu.classList.add('header-icons--is-active');
    } else {
      menu.classList.remove('header-icons--is-active');
    }
    // паралакс
    content.style.transform = "translate(0%, " + scroll /5 + "%";
    image.style.transform = "translate(0%, " + scroll /24 + "%";
   

  }
}
scrollEvents ();




////
var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];


var minPhoto = document.querySelectorAll('.gallery__picture-preview');
var fullPhoto = document.querySelector('.full-picture');

var addBigPhoto = function (minPhoto, pictur) {
  minPhoto.addEventListener('click', function () {
  fullPhoto.src = pictur;
  
  var photos = document.querySelectorAll('.gallery__picture-preview');
  console.log(photos)
  for (var j =0; j<photos.length; j++) {
    photos[j].classList.remove('active');
  }
  minPhoto.classList.add('active');
  
  
  });
}

for (var i =0; i<minPhoto.length; i++) {
  
  addBigPhoto (minPhoto[i], pictures[i]);
  
  }

// попап

// открыть по кнопке
$('.popup-open').click(function(e) { 
	e.preventDefault();
  $('.main-contact-popup').fadeIn();
  $('.popup-overlay').fadeIn();
	$('.main-contact-popup').addClass('disabled');
});

// закрыть на крестик
$('.popup-close').click(function(e) {
  e.preventDefault();
	$('.main-contact-popup').fadeOut();
	$('.popup-overlay').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.main-contact-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.main-contact-popup').fadeOut();
		$('.popup-overlay').fadeOut();
	}
});
