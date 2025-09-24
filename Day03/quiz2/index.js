const nature = document.querySelector("#nature");
const snow = document.querySelector("#snow");
const mountains = document.querySelector("#mountains");
const light = document.querySelector("#light");
const mainPicture = document.querySelector("#mainpicture");

nature.addEventListener("click", () => {
  mainPicture.innerText = "";
  const pictureImage = document.createElement("img");
  pictureImage.style.width = "100%";
  pictureImage.style.height = "100%";
  pictureImage.style.objectFit = "cover";
  pictureImage.src = "img/img_nature.jpg";
  mainPicture.appendChild(pictureImage);
});
snow.addEventListener("click", () => {
  mainPicture.innerText = "";
  const pictureImage = document.createElement("img");
  pictureImage.style.width = "100%";
  pictureImage.style.height = "100%";
  pictureImage.style.objectFit = "cover";
  pictureImage.src = "img/img_snow.jpg";
  mainPicture.appendChild(pictureImage);
});
mountains.addEventListener("click", () => {
  mainPicture.innerText = "";
  const pictureImage = document.createElement("img");
  pictureImage.style.width = "100%";
  pictureImage.style.height = "100%";
  pictureImage.style.objectFit = "cover";
  pictureImage.src = "img/img_mountains.jpg";
  mainPicture.appendChild(pictureImage);
});
light.addEventListener("click", () => {
  mainPicture.innerText = "";
  const pictureImage = document.createElement("img");
  pictureImage.style.width = "100%";
  pictureImage.style.height = "100%";
  pictureImage.style.objectFit = "cover";
  pictureImage.src = "img/img_lights.jpg";
  mainPicture.appendChild(pictureImage);
});
