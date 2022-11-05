const subs = document.querySelectorAll(".js-subs");
const refreshButtonRef = document.querySelector(".refresh");
console.log(subs);

subsData = [
  { twitter: 189000 },
  { youtube: 335000 },
  { instagram: 189000 },
  { tiktok: 189000 },
];

subs.forEach((e) => console.log(e.textContent));
