// мобильное меню
let buttonMenu = document.querySelector('.my-menu-button');
let sidebar = document.querySelector('.sidebar');
let sidebarLinks = sidebar.querySelectorAll('.sidebar-menu__link');

function openSidebar () {

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


// активная ссылка при перезагрузке страницы
function takeLink () {
  for (let j = 0; j<sidebarLinks.length; j++) {
    sidebarLinks[j].classList.remove('site-link--active');
  };
  for (let i = 0; i<sidebarLinks.length; i++) {
    let linksUrl = sidebarLinks[i].href;
    if (linksUrl == window.location.href) {
      sidebarLinks[i].classList.add('site-link--active');
    };
    if ('https://danzigwebb.github.io/' == window.location.href || 'https://danzigwebb.github.io' == window.location.href) {
      sidebarLinks[0].classList.add('site-link--active');
    };
  };
};
takeLink ();

// фикс бага ховера на айфон
if(window.innerWidth < 576){
  let portfolioItem = document.querySelectorAll('.mywork-item');
  for (let i =0;i<portfolioItem.length; i++){
    portfolioItem[i].onclick = function (){
      let portfolioItemHover = portfolioItem[i].querySelector('.mywork-item-content');
      portfolioItemHover.style.transform = 'translate3d(0, 0, 0) scaleY(1)';
      portfolioItemHover.style.opacity = '1';
    };
  }
}

