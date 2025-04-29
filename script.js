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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

buttonTop.addEventListener("click", scrollToTop);
