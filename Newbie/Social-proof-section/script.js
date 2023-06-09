gsap.from(".social_proof_tittle", 0.4, {
  opacity: "0",
  x: "-30%",
  delay: 0.1,
});

gsap.from(".social_proof_description", 0.3, {
  opacity: "0",
  y: "20%",
  delay: 0.4,
});

gsap.from(".rating__box", {
  opacity: "0",
  x: "10%",
  delay: 0.8,
  stagger: {
    each: 0.3,
  },
});

gsap.from(".star-box img", {
  opacity: "0",
  x: "5%",
  delay: 1.2,
  stagger: {
    each: 0.2,
  },
});

gsap.from(".testimonial__profiles_profile", {
  opacity: "0",
  y: "15%",
  delay: 1.6,
  stagger: {
    each: 0.2,
  },
});
