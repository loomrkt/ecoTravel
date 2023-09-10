$(window).scroll(function () {
  if ($(this).scrollTop() > $(window).height() * (2 / 3)) {
    $(".btnUp").addClass("up");
  } else {
    $(".btnUp").removeClass("up");
  }
});
$(".btnUp").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 0);
  return false;
});
$("#accordion1, #accordion2").accordion({
  collapsible: true,
  active: false,
});
$(".ui-accordion-header").on("click", function (e) {
  $(".arrowDown").not($(this).children("img")).removeClass("rotate");
  $(this).children("img").toggleClass("rotate");
  if (this.parentElement.id == "accordion1") {
    $("#accordion2").accordion("option", "active", false);
  } else {
    $("#accordion1").accordion("option", "active", false);
  }
});
