// IntersectionObserver
const lunch = document.querySelector("#lunch");

const keyframes = [
  { opacity: 0, transform: "translateY(20px)" },
  { opacity: 0.5, transform: "translateY(10px)" },
  { opacity: 1, transform: "translateY(0px)" },
];

const option = { duration: 1500 };

const ob = new IntersectionObserver((targets, me) => {
  targets.forEach((v) => {
    if (v.isIntersecting) v.target.animate(keyframes, option);
    me.unobserve(v.target);
  });
});

ob.observe(lunch);
