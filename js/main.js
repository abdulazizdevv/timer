let elInput = document.querySelector(".js-input");
let elInputGroup = document.querySelector(".input-group");
let elForm = document.querySelector("form");
let elList = document.querySelector(".js-list");
let btnGroup = document.querySelector(".btn-group");

function timeOut(time, node) {
  let spinner = document.createElement("div");
  spinner.setAttribute("class", "spinners spinner-grow bg-warning ms-2");
  let pages = document.createElement("p");

  node.appendChild(spinner);
  pages.setAttribute("class", "hero");
  spinner.appendChild(pages);
  var count = +time.value + 1;

  let interval = setInterval(() => {
    count--;
    pages.textContent = count;
  }, 1000);

  setTimeout(() => {
    spinner.remove();
    clearInterval(interval);
  }, count * 1000);
  time.value = "";
}

elForm.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (elInput.value !== "") {
    timeOut(elInput, elList);
  }
});
