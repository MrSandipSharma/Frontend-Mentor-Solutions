const tl = new TimelineMax();

tl.from(".stats_card_tittle", 0.3, { opacity: "0", x: "-10%" });
tl.from(".stats_card_description", 0.3, { opacity: "0", y: "20%" });
tl.from("#companies", 0.3, { opacity: "0", scaleX: "2.5" });
tl.from("#templates", 0.3, { opacity: "0", scaleX: "2.5" });
tl.from("#queries", 0.3, { opacity: "0", scaleX: "2.5" });
