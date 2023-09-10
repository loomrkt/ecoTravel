$("#hamburger").on("click", function () {
  $(this).toggleClass("is-activeBtn");
  $(".header__menu").toggleClass("is-active");
  return false;
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});
