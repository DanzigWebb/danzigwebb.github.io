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




