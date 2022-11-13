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
    const timelineMenu = gsap.timeline()
    timelineMenu.to('.loading', {opacity: 0, duration:1})
    timelineMenu.to('.content', {yPercent: 150, duration:1})
  }
}

loading.mouse = () => {
  const menuHeight = $('.menu')[0].offsetHeight
  $('.mouse').on('click', function () {
    gsap.to(window, {duration: 2, scrollTo: menuHeight});
  });
}

loading.all = () => {
  loading.transition()
  loading.mouse()
}

//nav
const nav = {}
const $nav = $('nav')

nav.color = function(){
  const $menu = document.querySelector('.menu')
  const menuHeight = $menu.offsetHeight
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    if (scrollVal < (menuHeight - 105)) {
      $nav.addClass('white')
    } else {
      $nav.removeClass('white')
    }
  });
}


nav.all = () => {
  nav.color()
}


//init
$(() => {
  //common
  clickSwitchClass.all()
  clickToggleClass.all()

  //others
  loading.all()
  nav.all()
});