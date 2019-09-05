// Your code goes here

// Window Load
window.addEventListener("load", event => {
  alert("page is fully loaded");
});

// Window Resize
window.addEventListener("resize", function() {
  document.getElementsByClassName(".container home").textContent =
    "you are resizing the window";
});

//Background color Change - bdlclick
const bgColor = document.querySelector("body");
bgColor.addEventListener("dblclick", e => {
  bgColor.style.backgroundColor = "#BDD4E7";
});

// Navigation Background color change - click
const navBg = document.querySelector(".main-navigation");
navBg.addEventListener("click", e => {
  navBg.style.backgroundColor = "grey";
});

// Logo text click alert message
const logoText = document.querySelector("h1");
logoText.addEventListener("click", event => {
  alert("Choose your Dream Desitination Today!");
  event.preventDefault();
});

// Navigation Mouse over color change
const link = document.querySelectorAll(".nav-link");
link.forEach(changeColor => {
  changeColor.addEventListener("mouseover", event => {
    changeColor.style.color = "red";
  });
});

// All H2's -  Mouse Over Color Change
const h2 = document.querySelectorAll("h2");
h2.forEach(changeColor => {
  changeColor.addEventListener("mouseover", event => {
    changeColor.style.color = "#F7B42C";
  });
});

// Intro Content - Mouseenter Size Scale
const introSizeUp = document.querySelectorAll(".intro");
introSizeUp.forEach(resize => {
  resize.addEventListener("mouseenter", event => {
    resize.style.transform = "scale(1.1)";
    resize.style.transition = " transform 0.5s";
    resize.style.color = "hotpink";
  });
});

// Intro Content - Mouseleave Size Scale
const introSizeDown = document.querySelectorAll(".intro");
introSizeDown.forEach(resize => {
  resize.addEventListener("mouseleave", event => {
    resize.style.transform = "scale(1)";
    resize.style.transition = "transform 0.8s";
  });
  resize.preventDefault();
});

// Content Section Images - Drag
const contentImg = document.querySelector(".img-content > img");
contentImg.addEventListener(
  "drag",
  e => (e.target.style.transform = "scale(1.25)")
);
