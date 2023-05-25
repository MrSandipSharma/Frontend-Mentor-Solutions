const tl = new TimelineMax();

tl.from(".nft_card_header_image", 0.3, { opacity: "0" });
tl.from(".nft_card_tittle", 0.3, { opacity: "0", x: "20%" });
tl.from(".nft_card_description", 0.3, { opacity: "0", y: "20%" });
tl.from(".price", 0.3, { opacity: "0", scaleX: "1.5" });
tl.from(".time-left", 0.3, { opacity: "0", scaleX: "1.5" });
tl.from(".creator_avatar", 0.3, { opacity: "0", scaleY: "1.5" });
tl.from(".creater_name", 0.3, { opacity: "0", y: "10%" });
