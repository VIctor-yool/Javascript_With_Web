// 유저에게 태그와 내용을 프롬프트 한 번에 입력받고
// 없는 태그면 div태그로 없는 태그 입력했습니다! 나오고
// 올바른 태그를 넣으면 태그와 내용 만들기

// const [tag, contents] = prompt("태그와 내용을 적어주세요").split(" ");

// const divv = document.createElement(tag);
// divv.innerText = contents;
// document.body.appendChild(divv);

// 유저에게 내용을 프롬프트 한 번에 입력받고
// 띄어쓰기 기준으로 해서 내용들을
// button 태그로만들어서 나타내기
// ex) 김치, 순대, 떡볶이, 사탕
// 김치 순대 떡볶이 사탕 (전부 버튼으로)

const contents = prompt("내용을 적어주세요").split(" "); // 김치, 순대, 떡볶이, 부대찌개
// const newTag = document.createElement("button");
// newTag.innerText = contents;
// document.body.appendChild(newTag);

contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
