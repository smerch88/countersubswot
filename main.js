"use strict";

let subsData = {
  twitter: 200000,
  youtube: 350000,
  instagram: 140000,
  tiktok: 100000,
};

const subs = document.querySelectorAll(".js-subs");
const refreshButtonRef = document.querySelector(".refresh");
const twitterStages = document.querySelectorAll(".stage-twitter");
const youtubeStages = document.querySelectorAll(".stage-youtube");
const instagramStages = document.querySelectorAll(".stage-instagram");
const tiktokStages = document.querySelectorAll(".stage-tiktok");

const handleClick = () => {
  fetchYouTube();
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

async function fetchYouTube() {
  //Отримуємо кілкість підписок з ютуба
  const response = await fetch(
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCh554z2-7vIA-Mf9qAameoA&key=AIzaSyDPPYTQRQayT5Rj34Esbjr68jjfYvmLl0M"
  ).then((res) => res.json()); //Перетворюємо дані в json і повертаємо в response
  const subscriber = response.items[0].statistics.subscriberCount; //З response находимо і записуємо кількість підписок
  console.log(subscriber);
  return (subsData.youtube = subscriber); //Повертаємо результат
}

fetchYouTube();
