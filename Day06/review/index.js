<<<<<<< HEAD
const pwd = document.querySelector("#pwd");
const conf = document.querySelector("#conf");
const btn = document.querySelector("#btn");

pwd.addEventListener("input", () => {
  if (pwd.value === conf.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
conf.addEventListener("input", () => {
  if (conf.value === pwd.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

// pwd.addEventListener("input", () => {
//   btn.disabled = pwd.value != conf.value;
// });

// conf.addEventListener("input", () => {
//   btn.disabled = pwd.value != conf.value;
// });
=======
const pwd = document.querySelector("#pwd");
const conf = document.querySelector("#conf");
const btn = document.querySelector("#btn");

pwd.addEventListener("input", () => {
  if (pwd.value === conf.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
conf.addEventListener("input", () => {
  if (conf.value === pwd.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

// pwd.addEventListener("input", () => {
//   btn.disabled = pwd.value != conf.value;
// });

// conf.addEventListener("input", () => {
//   btn.disabled = pwd.value != conf.value;
// });
>>>>>>> 958b3a85145d735581aedea7a6ac4bfb65245264
