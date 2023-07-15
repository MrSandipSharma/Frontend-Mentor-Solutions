btn = document.querySelector(".content__share-btn");

btn.addEventListener("click", (t) => {
  "true" === btn.getAttribute("aria-expanded")
    ? btn.setAttribute("aria-expanded", "false")
    : btn.setAttribute("aria-expanded", "true");
});

// Animation Part
const tl = new TimelineMax();

tl.from(".article_image", 0.1, { opacity: "0", y: "50%" });
tl.from(".article_content", 0.1, { opacity: "0", x: "30%" });
tl.from(".content__tittle", 0.1, { opacity: "0", x: "30%" });
tl.from(".content__description", 0.1, { opacity: "0", y: "30%" });
tl.from(".figure_image", 0.1, { opacity: "0", scale: 0 });
tl.from(".figure__name", 0.1, { opacity: "0", x: "30%" });
tl.from(".time", 0.1, { opacity: "0", y: "30%" });
tl.from(".content__share-btn", 0.1, { opacity: "0", scale: 0 });
