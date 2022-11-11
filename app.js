//common
function clickSwitchClass(target, className) {
  $(target).on('click', function () {
    $(target).not(this).removeClass(className);
    $(this).addClass(className);
  });
}

clickSwitchClass.all = () =>{
  clickSwitchClass($('.menu-option a'), 'active')
  clickSwitchClass($('.answer li'), 'active')
}

function clickToggleClass(target, className) {
  $(target).on('click', function () {
    $(this).toggleClass(className);
  });
}

clickToggleClass.all = () =>{
  clickToggleClass($('.nav-right'), 'active')
}

//loading
const loading = {}
loading.transition = () => {
  const loading = $('.loading')
  loading[0].onanimationend = (loading) => {
    $('.loading').slideUp();
    setTimeout(() => {
      $('.loading').hide();
      $('.content').addClass('show')
    }, 300);
  }
}

function navColor(){
  const $menu = document.querySelector('.menu')
  const $nav = $('nav')
  const menuHeight = $menu.offsetHeight
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    if (scrollVal < menuHeight) {
      $nav.addClass('white')
    } else {
      $nav.removeClass('white')
    }
  });
}


$(() => {
  loading.transition();
  clickSwitchClass.all()
  clickToggleClass.all()
  navColor()
});