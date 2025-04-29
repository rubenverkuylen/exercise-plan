"use strict";

const buttonTop = document.getElementById("button-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.classList.add("show");
  } else {
    buttonTop.classList.remove("show");
  }
}
function scrollToTop() {
  buttonTop.classList.remove("show");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

buttonTop.addEventListener("click", scrollToTop);
