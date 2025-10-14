const id = document.querySelector("#id");
const btn = document.querySelector("#conf");
const pwd = document.querySelector("#password");
const email = document.querySelector("#email");
const emailconf = document.querySelector("#emailconf");
const idstr = document.querySelector("#idstr");
const idlength = document.querySelector("#idlength");
const pwdstr = document.querySelector("#pwdstr");
const pwdnum = document.querySelector("#pwdnum");
const pwdsc = document.querySelector("#pwdsc");
const pwdlength = document.querySelector("#pwdlength");
const pwdctn = document.querySelector("#pwdcontainer");

const a = /^[a-zA-Z0-9]{6,20}$/;
const b = /^[a-zA-Z0-9!@$%^*_+~]{8,20}$/;
const c = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

id.addEventListener("input", () => {
  const { value } = id;
  value.match(/[a-zA-Z0-9]/)
    ? (idstr.style.color = "lightgreen")
    : (idstr.style.color = "black");
  value.match(/^.{6,20}$/)
    ? (idlength.style.color = "lightgreen")
    : (idlength.style.color = "black");

  btn.disabled = !(
    a.test(id.value) &&
    b.test(pwd.value) &&
    c.test(email.value)
  );
});

pwd.addEventListener("input", () => {
  const { value } = pwd;
  value.match(/[a-zA-Z]/)
    ? (pwdstr.style.color = "lightgreen")
    : (pwdstr.style.color = "black");

  value.match(/[0-9]/)
    ? (pwdnum.style.color = "lightgreen")
    : (pwdnum.style.color = "black");

  value.match(/[!@$%^*_+~]/)
    ? (pwdsc.style.color = "lightgreen")
    : (pwdsc.style.color = "black");

  value.match(/^.{8,20}$/)
    ? (pwdlength.style.color = "lightgreen")
    : (pwdlength.style.color = "black");

  btn.disabled = !(
    a.test(id.value) &&
    b.test(pwd.value) &&
    c.test(email.value)
  );
});

email.addEventListener("input", () => {
  const { value } = email;
  value.match(c)
    ? (emailconf.style.color = "lightgreen")
    : (emailconf.style.color = "black");

  btn.disabled = !(
    a.test(id.value) &&
    b.test(pwd.value) &&
    c.test(email.value)
  );
});
