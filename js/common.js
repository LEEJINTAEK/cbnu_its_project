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
