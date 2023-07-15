btn = document.querySelector(".content__share-btn");

btn.addEventListener("click", (t) => {
  "true" === btn.getAttribute("aria-expanded")
    ? btn.setAttribute("aria-expanded", "false")
    : btn.setAttribute("aria-expanded", "true");
});

