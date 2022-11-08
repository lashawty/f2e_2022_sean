//common
function clickSwitchClass(target, className) {
  $(target).on('click', function () {
    $(target).not(this).removeClass(className);
    $(this).addClass(className);
  });
}

//loading
const loading = {}
loading.transition = () => {
  const loading = $('.loading')
  loading[0].onanimationend = (loading) => {
    $('.loading').slideUp();
    setTimeout(() => {
      $('.loading').hide();
    }, 300);
  }
}

$(() => {
  loading.transition();
  clickSwitchClass($('.menu-option p'), 'active')
});