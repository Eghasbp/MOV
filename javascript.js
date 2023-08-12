$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".mov-navbar").css("background", "#0C0C0C");
    } else {
      $(".mov-navbar").css("background", "transparent");
    }
  });
});
