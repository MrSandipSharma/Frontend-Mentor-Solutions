const card_info__title = new SplitType(".card_info__title");
const card_info__detail = new SplitType(".card_info__detail");

gsap.from(".card_info", 0.3, { opacity: "0", y: "-50%" });
gsap.from(".card_subscription", 0.3, { opacity: "0", y: "50%", delay: 0.3 });
gsap.from(".card_features", 0.3, { opacity: "0", y: "50%", delay: 0.3 });

gsap.from(card_info__title.chars, 0.5, {
  y: "-20",
  opacity: 0,
  ease: "power2.inOut",
  yoyo: true,
  stagger: 0.08,
  scale: 4,
  delay: 0.6,
});

gsap.from(card_info__detail.chars, 0.5, {
  y: "-20",
  opacity: 0,
  ease: "power2.inOut",
  yoyo: true,
  stagger: 0.08,
  scale: 4,
  delay: 0.6,
});

const tl = new TimelineMax();

tl.from(".card_info_description", 2, { opacity: "0", y: "50%", delay: 2.5 });
tl.from(".card_subscription__title", 0.3, { opacity: "0", x: "-20%" });
tl.from(".price_money", 0.3, { opacity: "0", scale: 1.15 });
tl.from(".price_validity", 0.3, { opacity: "0", y: "10%" });
tl.from(".card_subscription__desc", 0.3, { opacity: "0", y: "10%" });
tl.from(".btn", 0.3, { opacity: "0", scale: 1.9 });
tl.from(".card_features__title", 0.3, { opacity: "0", x: "20%" });
tl.from(".card_features__list", 0.3, { opacity: "0", x: "20%" });
