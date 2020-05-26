"use strict";

// Make navbar transparent when it is on the top
const nav = document.querySelector("nav");
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navHeight) nav.classList.add("nav--hide");
  else nav.classList.remove("nav--hide");
});

// random subtitle
const subtitle = document.querySelector(".home__subtitle");

setInterval(() => {
  randomPlaySubtitle(subtitle);
}, 2000);

const roleArr = ["Cat lover", "Software Engineer", "Dreamer"];
function randomPlaySubtitle(content) {
  let text = roleArr[Math.floor(Math.random() * roleArr.length)];
  content.innerHTML = "";
  content.append(`I'm a ${text} living in Seoul,`);
}

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

let rellax = new Rellax(".rellax");

// Show "arrow up" button when scolling down
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) arrowUp.classList.add("visible");
  else arrowUp.classList.remove("visible");
});

// Handle click on the "arorw up" button
arrowUp.addEventListener("click", () => scrollToTop());

// Copy Email to Clipboard
const email = document.querySelector(".contact__email");
email.addEventListener("click", () => copyText(email.innerHTML));

// Scroll Function
let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page

// Check if we're at the top already. If so, stop scrolling by clearing the interval
function scrollStep() {
  if (window.pageYOffset === 0) clearInterval(intervalId);
  window.scroll(0, window.pageYOffset - 50);
}

// Call the function scrollStep() every 16.66 millisecons
function scrollToTop() {
  if (window.pageYOffset === 0) return;
  intervalId = setInterval(scrollStep, 16.66);
}

function copyText(content) {
  let textArea = document.createElement("textarea");
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  /* Alert the copied text */
  alert("Copied the text: " + content);
}
