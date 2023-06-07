const drop = document.querySelectorAll(".summary_tittle");

drop.forEach((e) => {
  e.addEventListener("click", (m) => {
    if (m.target.parentElement.open == true)
      return (e.target.parentElement = false);
    drop.forEach((element) => (element.parentElement.open = false));
    m.target.parentElement.open = false;
  });
});

// Animation
const tl = new TimelineMax();

gsap.from(".faq_card_image", 0.4, { opacity: "0", x: "-50%" });
gsap.from(".accordion_title", 0.4, { opacity: "0", y: "20%", delay: 0.4 });
gsap.from(".accordion_summary", {
  opacity: "0",
  x: "20%",
  delay: 0.8,
  stagger: {
    each: 0.4,
  },
});
