// load: 모든 리소스가 다 로드 되었을 때, [이미지, css, js] 파일 로딩이 다 끝났을 때!
const loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  loading.style.display = "none";
});
