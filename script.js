let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
    document.getElementsByClassName("red-nav-m")[0].classList.remove("hide");
  } else {
    document.getElementsByClassName("red-nav-m")[0].classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};

document.getElementById('side-open').addEventListener('click',()=>{
  document.getElementsByClassName('red-nav-s')[0].style.width = '250px'
})
document.getElementById('side-close').addEventListener('click',()=>{
  document.getElementsByClassName('red-nav-s')[0].style.width = '0px'
})