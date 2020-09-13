// Your code goes here

function newtext() {
  let text = document.querySelector("p#text")
  text.textContent = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", function() {
  newtext();
});
