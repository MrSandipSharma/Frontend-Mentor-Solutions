const tl = new TimelineMax();

tl.from(".order_card_image", 0.3, { opacity: "0", y: "50%" });
tl.from(".order_card_tittle", 0.3, { opacity: "0", x: "30%" });
tl.from(".order_card_description", 0.3, { opacity: "0", y: "30%" });
tl.from(".order_card_plan", 0.3, { opacity: "0", y: "30%" });
tl.from(".plan_type", 0.3, { opacity: "0", x: "10%" });
tl.from(".change_btn", 0.3, { opacity: "0", y: "30%" });
tl.from(".proceed_btn", 0.3, { opacity: "0", scale: "-1" });
tl.from(".cancel_btn", 0.3, { opacity: "0", scale: "1.2" });

// 3d Animation
const card = document.querySelector(".order_card");

card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 8;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
