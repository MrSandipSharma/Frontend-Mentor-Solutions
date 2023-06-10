const tl = new TimelineMax();

tl.from(".info__tittle", 0.4, { opacity: "0", x: "50%" });
tl.from(".info__description", 0.4, { opacity: "0", y: "50%" });
tl.from(".detail__box", 0.4, { opacity: "0", scale: "-1" });
tl.from(".detail__box_tittle", 0.4, { opacity: "0", x: "-20%" });
tl.from(".detail__box_description", 0.4, { opacity: "0", y: "-20%" });
tl.from(".detail__box_icon", 0.4, { opacity: "0", rotation: "360deg" });
