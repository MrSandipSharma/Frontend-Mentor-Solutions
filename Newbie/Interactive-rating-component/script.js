const card_inner = document.querySelector(".rating_card_inner");
const frontform = document.querySelector(".rating_card_front_rating_form");
const rating_inputs = document.getElementsByName("rating");
const frontSubmit_btn = document.querySelector(".submit_button");
const backrating_display = document.querySelector("#rating_display");
const resetbtn = document.querySelector(".reset_button");

// Animation Part
const tl = new TimelineMax();

tl.from(".rating_card_front_star_icon", 0.6, { opacity: "0", scale: "3.5" });
tl.from(".rating_card_front_tittle", 0.3, { opacity: "0", x: "20%" });
tl.from(".rating_card_front_description", 0.6, { opacity: "0", y: "20%" });
tl.from(".rating_card_front_rating_form", 0.6, { opacity: "0", scaleX: "1.5" });
tl.from(".submit_button", 0.3, { opacity: "0", scaleY: "1.3" });

// Button State Change
document.getElementsByName("rating").forEach((el) => {
  el.addEventListener("change", () => {
    frontSubmit_btn.removeAttribute("disabled");
  });
});

// Submit Button
frontform.addEventListener("submit", (e) => {
  e.preventDefault();
  backrating_display.innerHTML = e.target.rating.value;
  card_inner.style.transform = "rotateY(180deg)";
});

// Reset Button
resetbtn.addEventListener("click", () => {
  card_inner.style.transform = "rotateY(0deg)";
  frontSubmit_btn.setAttribute("disabled", "true");
  rating_inputs.forEach((e) => {
    e.checked = false;
  });
});
