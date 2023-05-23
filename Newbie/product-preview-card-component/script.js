const tl = new TimelineMax();

tl.from(".product_category", 0.3, { opacity: "0", x: "30%" });
tl.from(".product_tittle", 0.3, { opacity: "0", x: "30%" });
tl.from(".product_description", 0.3, { opacity: "0", y: "30%" });
tl.from(".current_price", 0.3, { opacity: "0", y: "30%" });
tl.from(".original_price", 0.3, { opacity: "0", y: "30%" });
tl.from(".btn", 0.3, { opacity: "0", scale: "-1" });
