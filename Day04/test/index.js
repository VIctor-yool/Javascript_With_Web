// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");
// const box4 = document.querySelector(".box4");
// const box5 = document.querySelector(".box5");
// const box6 = document.querySelector(".box6");
// const arr = [box1, box2, box3, box4, box5, box6];

import { keyframes, options } from "./animation.js";
import { boxes } from "./query.js";

boxes.forEach((v, i) => {
  v.animate(keyframes, { ...options, delay: 400 * i });
});

// const keyframes = [
//   { opacity: 0, transform: "translateY(0px)" },
//   { opacity: 1, transform: "translateY(0px)" },
// ];

// const option = [
//   { duration: 1000 },
//   { duration: 2000 },
//   { duration: 3000 },
//   { duration: 4000 },
//   { duration: 5000 },
//   { duration: 6000 },
// ];

// const option = [{ duration: 300, fill: "forwards", delay: 0 }];

// const ob = new IntersectionObserver((targets, me) => {
//   targets.forEach((v) => {
//     if (v.isIntersecting) v.target.animate(keyframes, option);
//     me.unobserve(v.target);
//   });
// });
