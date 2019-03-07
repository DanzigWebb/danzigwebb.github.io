// сайдбар
function openSidebar () {
  let buttonMenu = document.querySelector('.my-menu-button');
  let sidebar = document.querySelector('.mysidebar');
  let menu = document.querySelector('.header-icons');

  buttonMenu.onclick = function(e) {
    // задержка анимации гамбургера
    function openOnClick () {
      buttonMenu.classList.toggle('is-active');

    };
    setTimeout(openOnClick, 400)
    sidebar.classList.toggle('is-active');
  }
}

openSidebar ()

// прилипающее меню

function fixedMenu () {
  let menu = document.querySelector('.header-icons');
  console.log(menu)
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 300) {
      menu.classList.add('header-icons--is-active');
    } else {
      menu.classList.remove('header-icons--is-active');
    }
    
  }

}

fixedMenu ()