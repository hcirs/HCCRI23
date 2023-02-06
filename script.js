let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
    document.getElementsByClassName("red-nav")[0].classList.remove("hide");
  } else {
    document.getElementsByClassName("red-nav")[0].classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};