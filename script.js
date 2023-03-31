//Navbar

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

//Dropdown
let oneisactive=false
document.querySelectorAll('.dropdown').forEach((v)=>{
  v.addEventListener('click',()=>{
    if(v.children[1].style.height=='0px'||v.children[1].style.height=='')
    {
      if(oneisactive){
        document.querySelectorAll('.dropdown').forEach((v)=>{
          v.children[1].style.height='0px'
          v.children[1].style.padding='0px'
          v.children[1].style.marginTop='0px'
          v.children[1].style.marginRight='0px'
        })
      }
      v.children[1].style.height='auto'
      v.children[1].style.padding='12px 16px'
      v.children[1].style.marginTop='10px'
      v.children[1].style.marginRight='20px'
      oneisactive=true
    }
    else{v.children[1].style.height='0px'
    v.children[1].style.padding='0px'
    v.children[1].style.marginTop='0px'
    v.children[1].style.marginRight='0px'
    oneisactive=false
  }
  })
})

// countdown

const targetdate = new Date(2023,3,27,23,59,59,0); //27 april 2023 2359
const confdate = new Date(2023,4,29,0,0,0) //29 may 2023, 12am
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
