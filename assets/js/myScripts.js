// мобильное меню
let buttonMenu = document.querySelector('.my-menu-button');
let sidebar = document.querySelector('.sidebar');
let sidebarLinks = sidebar.querySelectorAll('.sidebar-menu__link');

function openSidebar() {

  buttonMenu.onclick = function (e) {
    // задержка анимации гамбургера
    function openOnClick() {
      buttonMenu.classList.toggle('is-active');

    };
    setTimeout(openOnClick, 100)
    sidebar.classList.toggle('is-active');
  }
  for (let j = 0; j < sidebarLinks.length; j++) {
    sidebarLinks[j].onclick = function () {
      sidebar.classList.remove('is-active');
      buttonMenu.classList.remove('is-active');

    }
  }

}
openSidebar();



// фикс бага ховера на айфон
if (window.innerWidth < 576) {
  let portfolioItem = document.querySelectorAll('.mywork-item');
  for (let i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].onclick = function () {
      let portfolioItemHover = portfolioItem[i].querySelector('.mywork-item-content');
      portfolioItemHover.style.transform = 'translate3d(0, 0, 0) scaleY(1)';
      portfolioItemHover.style.opacity = '1';
    };
  }
}

$(document).ready(function () {
  let $subpage = $(".subpage");
  let $sidebarMenu = $(".sidebar-menu-item");

  $subpage.not(":eq(0)").hide();

  $sidebarMenu.on('click', function () {
    $sidebarMenu.removeClass("active").eq($(this).index()).addClass("active");
    $subpage.hide(400).eq($(this).index()).fadeIn(800);
    $('html, body').animate({
      scrollTop: 0
    });
  }).eq(0).addClass("active");

  $(document).on('click', function (e) {
    if (e.target !== $('.my-menu-button')[0]) {
      $('.my-menu-button').removeClass('is-active')
      $('.sidebar').removeClass('is-active')
    };
  });

})
