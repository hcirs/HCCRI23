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

document.getElementById("side-open").addEventListener("click", () => {
  document.getElementsByClassName("red-nav-s")[0].style.width = "280px";
});
document.getElementById("side-close").addEventListener("click", () => {
  document.getElementsByClassName("red-nav-s")[0].style.width = "0px";
});

// countdown

const targetdate = new Date(2023,3,1,12,0,0,0); //set as 1 april 2023 12pm, change as nec
const confdate = new Date(2023,5,19,0,0,0) //19 june 2023, 12am
let now = Date.now()

if(document.getElementById('hours')){
  if(now<=targetdate){
    diff=parseInt(targetdate-now)
    document.getElementById('days').innerText=`${Math.floor(diff/1000/60/60/24)} Days`
    diff-=Math.floor(diff/1000/60/60/24)*1000*60*60*24
    document.getElementById('hours').innerText=`${Math.floor(diff/1000/60/60)} Hours`
    diff-=Math.floor(diff/1000/60/60)*1000*60*60
    document.getElementById('minutes').innerText=`${Math.floor(diff/1000/60)} Minutes`
  }
  else{
    diff=confdate-now
    document.getElementById('event').innerText='to the Conference!'
    document.getElementById('days').innerText=`${Math.floor(diff/1000/60/60/24)} Days`
    diff-=Math.floor(diff/1000/60/60/24)*1000*60*60*24
    document.getElementById('hours').innerText=`${Math.floor(diff/1000/60/60)} Hours`
    diff-=Math.floor(diff/1000/60/60)*1000*60*60
    document.getElementById('minutes').innerText=`${Math.floor(diff/1000/60)} Minutes`
  }
}

// faq menu
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
