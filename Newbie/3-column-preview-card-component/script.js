const tl = new TimelineMax();

tl.from(".column_container_img", 0.3, { opacity: "0", scaleX: "1.5" });
tl.from(".column_container_tittle", 0.3, { opacity: "0", scaleY: "-1.5" });
tl.from(".column_container_description", 0.3, { opacity: "0", y: "10%" });
tl.from(".column_container_link", 0.3, { opacity: "0", scaleX: "1.2" });
