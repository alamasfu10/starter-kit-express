// Shorthand for $( document ).ready()
$(function() {
  $('.menu').addClass('menu--expanded');

  $(window).scroll(() => {
    $('.menu').toggleClass('menu--expanded', $(document).scrollTop() < 200);
  })
});
