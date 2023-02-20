window.addEventListener("load", function () {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 3000);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    a.classList.add("active");
    navTogglerBtn.classList.remove("open");
    aside.classList.remove("open");
  });
}

/*================ TESTIMONIAL ================*/
var slide = document.getElementById("slide");
var up = document.getElementById("up");
var down = document.getElementById("down");

let x = 0;

up.onclick = () => {
  if (x > -900) {
    x = x - 300;
    slide.style.top = x + "px";
  }
};

down.onclick = () => {
  if (x < 0) {
    x = x + 300;
    slide.style.top = x + "px";
  }
};
