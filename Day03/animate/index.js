const heading = document.querySelector("#heading");

heading.animate(
  [
    { opacity: 0, transform: "translateY(20px)" },
    { opacity: 0.5, transform: "translateY(10px)" },
    { opacity: 1, transform: "translateY(0px)" },
  ],
  { duration: 1000 }
);
