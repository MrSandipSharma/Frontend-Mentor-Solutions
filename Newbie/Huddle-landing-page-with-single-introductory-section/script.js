const content_detail_title = new SplitType(".content_detail_title");
const content_detail_description = new SplitType(".content_detail_description");

gsap.from(".page_header", 0.5, { opacity: 0, x: "50%", scale: 2.1 });
gsap.from(".page_content__image", 0.5, {
  opacity: 0,
  y: "50%",
  scale: 0,
  delay: 0.3,
});
gsap.from(content_detail_title.chars, 0.5, {
  y: "-20",
  opacity: 0,
  ease: "power2.inOut",
  yoyo: true,
  stagger: 0.08,
  scale: 4,
  delay: 0.4,
});
gsap.from(content_detail_description.chars, 0.5, {
  x: "20%",
  opacity: 0,
  ease: "power2.inOut",
  yoyo: true,
  stagger: 0.01,
  scale: 2,
  delay: 0.6,
});
gsap.from(".content_detail_btn", 0.4, {
  opacity: 0,
  rotation: 360,
  delay: 0.8,
});
gsap.from(".social_media_icons", 0.4, {
  opacity: 0,
  rotation: 360,
  delay: 0.8,
});
