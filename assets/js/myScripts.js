// сайдбар
function openSidebar () {
  var buttonMenu = document.querySelector('.my-menu-button');
  var sidebar = document.querySelector('.mysidebar');


  buttonMenu.onclick = function(e) {
    // задержка анимации гамбургера
    function func() {
      buttonMenu.classList.toggle('is-active');
    };
    setTimeout(func, 400)
    sidebar.classList.toggle('is-active');
  }
}

openSidebar ()

