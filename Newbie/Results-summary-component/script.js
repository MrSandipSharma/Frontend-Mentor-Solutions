const tl = new TimelineMax();

tl.from(".result_section_tittle", 0.3, { opacity: "0", x: "20%" });
tl.from(".result_section_cricle_box", 0.3, { opacity: "0", rotation: 360 });
tl.from(".scored_mark", 0.3, { opacity: "0", y: "10%" });
tl.from(".scored_outof", 0.3, { opacity: "0", y: "10%" });
tl.from(".result_section_appriciation", 0.3, { opacity: "0", y: "10%" });
tl.from(".result_section_description", 0.3, { opacity: "0", y: "10%" });
tl.from(".summary_section_tittle", 0.3, { opacity: "0", x: "-20%" });
tl.from("#reaction", 0.3, { opacity: "0", x: "20%" });
tl.from("#memory", 0.3, { opacity: "0", x: "20%" });
tl.from("#verbal", 0.3, { opacity: "0", x: "20%" });
tl.from("#Visual", 0.3, { opacity: "0", x: "20%" });
tl.from(".btn", 0.3, { opacity: "0", scaleY: "1.3" });
