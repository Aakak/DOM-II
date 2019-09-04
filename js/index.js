// Your code goes here

//Logo text click alert message
const boatContainer = document.querySelector(".nav-container h1");
boatContainer.addEventListener("click", event => {
  alert("Choose your Dream Desitination Today!");
});

// All H2's -  Mouse Over Color Change
const h2 = document.querySelectorAll("h2");
h2.forEach(changeColor => {
  changeColor.addEventListener("mouseover", event => {
    changeColor.style.color = "red";
  });
});

// All H2's -  Mouse Over Color Change
const a = document.querySelectorAll(".nav-link");
a.forEach(resize => {
  resize.addEventListener("mouseover", event => {
    resize.style.color = "red";
  });
});

// Intro Content - Mouse Enter, Mouse Leave Size Scale
const introSizeUp = document.querySelectorAll(".intro");
introSizeUp.forEach(resize => {
  resize.addEventListener("mouseenter", event => {
    resize.style.transform = "scale(1.1)";
    resize.style.transition = " transform 0.5s";
    resize.style.color = "hotpink";
  });
});

const introSizeDown = document.querySelectorAll(".intro");
introSizeDown.forEach(resize => {
  resize.addEventListener("mouseleave", event => {
    resize.style.transform = "scale(1)";
    resize.style.transition = "transform 0.5s";
  });
});
