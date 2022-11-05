const subs = document.querySelectorAll(".js-subs");
const refreshButtonRef = document.querySelector(".refresh");
// console.log(subs);

subsData = {
  twitter: 189000,
  youtube: 335000,
  instagram: 189000,
  tiktok: 189000,
};

const refreshCounter = (data) => {
  const { twitter, youtube, instagram, tiktok } = data;
  console.log(twitter);
  console.log(youtube);
  console.log(instagram);
  console.log(tiktok);
};

// subs.forEach((e) => console.log(e.textContent));

refreshButtonRef.addEventListener("click", refreshCounter(subsData));
