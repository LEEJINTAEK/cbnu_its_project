const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  //focus해제 blur
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

//날짜
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //textcontent-> 글자내용의 값을 알아내거나 지정

//좋아요 임시 버튼
const likeIcon = document.querySelectorAll(".restaurant button i");

//// 딱 하나만 선택하도록
// likeIcon.forEach(function (x) {
//   x.addEventListener("click", function () {
//     likeIcon.forEach(function (e) {
//       e.classList.remove("active");
//     });
//     x.classList.add("active");
//   });
// });

likeIcon.forEach((x) =>
  x.addEventListener("click", () => x.classList.toggle("active"))
);
