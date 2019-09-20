let container = document.querySelector(".catalog__view");
let btns = container.getElementsByClassName("btn");
let mybutton = document.getElementById("button");
let catalog = document.querySelector(".catalog__row");
function listView() {
  catalog.classList.toggle('grid');
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let menuBtn = document.querySelector('.navTrigger');
let menu = document.querySelector('.header__menu');
menuBtn.onclick = function () {
  menu.classList.toggle('active');
  this.classList.toggle('active');
};
