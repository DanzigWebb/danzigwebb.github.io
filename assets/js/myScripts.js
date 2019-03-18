// мобильное меню
function openSidebar () {
  let buttonMenu = document.querySelector('.my-menu-button');
  let sidebar = document.querySelector('.sidebar');
  let sidebarLinks = sidebar.querySelectorAll('.sidebar-menu__link');
  console.log(sidebarLinks)
  buttonMenu.onclick = function(e) {
    // задержка анимации гамбургера
    function openOnClick () {
      buttonMenu.classList.toggle('is-active');

    };
    setTimeout(openOnClick, 100)
    sidebar.classList.toggle('is-active');
  }
  for (let j = 0; j<sidebarLinks.length; j++) {
    sidebarLinks[j].onclick = function() {
      sidebar.classList.remove('is-active');
      buttonMenu.classList.remove('is-active');
      for (let i = 0; i<sidebarLinks.length; i++) {
        sidebarLinks[i].classList.remove('site-link--active');
      }
      sidebarLinks[j].classList.add('site-link--active');
    }
  }
}
openSidebar ();
