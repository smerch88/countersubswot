"use strict";

const subsData = {
  twitter: 189000,
  youtube: 335000,
  instagram: 189000,
  tiktok: 189000,
};

const subs = document.querySelectorAll(".js-subs");
const refreshButtonRef = document.querySelector(".refresh");
const twitterStages = document.querySelectorAll(".stage-twitter");
const youtubeStages = document.querySelectorAll(".stage-youtube");
const instagramStages = document.querySelectorAll(".stage-instagram");
const tiktokStages = document.querySelectorAll(".stage-tiktok");

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
};

refreshButtonRef.addEventListener("click", handleClick);
refreshButtonRef.addEventListener("click", checkStage);

function checkStage() {
  const { twitter, youtube, instagram, tiktok } = subsData;

  twitterStages.forEach((e) => {
    e.dataset.quantity <= twitter
      ? (e.classList.remove("not-passed"), e.classList.add("passed"))
      : (e.classList.remove("passed"), e.classList.add("not-passed"));
  });
  youtubeStages.forEach((e) => {
    e.dataset.quantity <= youtube
      ? (e.classList.remove("not-passed"), e.classList.add("passed"))
      : (e.classList.remove("passed"), e.classList.add("not-passed"));
  });
  instagramStages.forEach((e) => {
    e.dataset.quantity <= instagram
      ? (e.classList.remove("not-passed"), e.classList.add("passed"))
      : (e.classList.remove("passed"), e.classList.add("not-passed"));
  });
  tiktokStages.forEach((e) => {
    e.dataset.quantity <= tiktok
      ? (e.classList.remove("not-passed"), e.classList.add("passed"))
      : (e.classList.remove("passed"), e.classList.add("not-passed"));
  });
}
