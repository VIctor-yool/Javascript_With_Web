// fetch

// 부평
// 37.49
// 126.72
// Clouds

// 베른
// 46.948
// 7.407
// Clouds

// 웰링턴
// 174.776
// -41.286

// 타슈켄트
// 41.308
// 69.259
// Clouds

// 도쿄
// 35.7
// 139.4
// drizzle

// 오슬로
// 59.949
// 10.756
// Clouds

// 런던
// -0.127
// 51.507
// Clouds
const APIKEY = "191ad5d834423e11247cf8bfedf87ed5";
const lat = -0.127;
const long = 51.507;

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
)
  .then((res) => res.json())
  .then((v) => {
    console.log(v);
  });

// fetch 뒤에 url
// fetch 데이터만 가져와서 씀
// [{title:""},{title:""}...]
