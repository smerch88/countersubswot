"use strict";

const subsData = {
  twitter: 189000,
  youtube: 335000,
  instagram: 189000,
  tiktok: 189000,
};

const subs = document.querySelectorAll(".js-subs");
const refreshButtonRef = document.querySelector(".refresh");

const handleClick = () => {
  const { twitter, youtube, instagram, tiktok } = subsData;
  console.log(twitter);
  console.log(youtube);
  console.log(instagram);
  console.log(tiktok);
  subs[0].textContent = twitter;
  subs[1].textContent = youtube;
  subs[2].textContent = instagram;
  subs[3].textContent = tiktok;
  subs.forEach((item) => (item.textContent = subsData.item));
};

refreshButtonRef.addEventListener("click", handleClick);
