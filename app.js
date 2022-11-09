//common
function clickSwitchClass(target, className) {
  $(target).on('click', function () {
    $(target).not(this).removeClass(className);
    $(this).addClass(className);
  });
}

function clickToggleClass(target, className) {
  $(target).on('click', function () {
    $(this).toggleClass(className);
  });
}
//GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin)
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

$(() => {
  loading.transition();
  clickSwitchClass($('.menu-option a'), 'active')
  clickToggleClass($('.nav-right'), 'active')
});