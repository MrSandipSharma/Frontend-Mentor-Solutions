const tl = new TimelineMax();

tl.from(".profile_card_banner", 0.1, { opacity: "0" });
tl.from(".profile_card_user_image", 0.3, { opacity: "0" });
tl.from(".flex-group", 0.6, { opacity: "0", y: "20%" });
tl.from(".profile_card_location", 0.6, { opacity: "0", scaleX: "1.5" });
tl.from("#followers", 0.3, { opacity: "0", scaleY: "1.5" });
tl.from("#likes", 0.3, { opacity: "0", scaleY: "1.5" });
tl.from("#fhotos", 0.3, { opacity: "0", scaleY: "1.5" });
