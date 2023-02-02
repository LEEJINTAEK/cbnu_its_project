//visual
const pictureArray = [
  "images/visual_바니쉬버거.jpg",
  "images/visual_쿡메시야.jpg",
  "images/visual_자담돈.jpg",
];

const addressArray = [
  "충북 청주시 서원구 사창동 474-3 1층",
  "충북 청주시 서원구 사창동 474-3 1층",
  "충북 청주시 서원구 내수동로108번길 51",
];

const nameArray = ["바니쉬버거", "쿡메시야", "자연을 담은 돈까스"];

const foodArray = ["버거/수제버거", "일식", "돈까스"];

const FAArray = [
  "https://map.naver.com/v5/entry/place/21634116?placePath=%2Fhome&entry=plt&c=15,0,0,3,dh",
  "https://map.naver.com/v5/entry/place/38632509?placePath=%2Fhome&entry=plt",
  "https://map.naver.com/v5/entry/place/37112538?placePath=%2Fhome&c=15,0,0,3,dh",
];

const introArray = [
  '"비주얼부터 맛있는 수제버거맛집"',
  '"충북대 사르르 녹는 연어덮밥"',
  '"최상등급의 돈육으로 만드는 정상다한 돈가스"',
];

let obTimeOut;
let n = 0;
let c;
let i;

function changeOpacity() {
  document.getElementsByClassName("img_id")[0].style.opacity = "1";
}

function changeImg() {
  document.getElementsByClassName("img_id")[0].src = pictureArray[n];
}

function RotateImage() {
  n++;
  if (n < pictureArray.length) {
    document.getElementsByClassName("img_id")[0].style.opacity = "0.7";

    document.getElementsByClassName("name")[0].innerHTML = nameArray[n];
    document.getElementsByClassName("add")[0].innerHTML = addressArray[n];
    document.getElementsByClassName("food_tag")[0].innerHTML = foodArray[n];
    document.getElementsByClassName("food_address")[0].href = FAArray[n];
    document.getElementsByClassName("intro")[0].innerHTML = introArray[n];
    i = setTimeout("changeImg()", 150);
    c = setTimeout("changeOpacity()", 300);
    obTimeOut = setTimeout("RotateImage()", 5000);
  } else {
    n = -1;
    obTimeOut = setTimeout("RotateImage()", 1);
  }
}

function Startvisual() {
  obTimeOut = window.setTimeout(RotateImage, 100);
}

window.onload = Startvisual;

// 스크롤 동작

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        //배지숨기기
        opacity: 0,
        display: "none",
      });
      //버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        //배지보이기
        opacity: 1,
        display: "block",
      });
      //버튼숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수,시간) >> lodash.cdn 에서
// gsap.to(요소, 지속시간, 옵션); >>gsap.cdn에서

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (a, index) {
  gsap.to(a, 1, {
    delay: (index + 1) * 0.7, //index 는 0부터니까
    opacity: 1,
  });
});
//new 생성자(클래스) new swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true, //반복재생
});
//슬라이드
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSildes: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //5s 자동 슬라이드
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지번호요소선택자
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//슬라이드영역토글
const promotionEl = document.querySelector(".promotion");
const promotionToggle = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggle.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; //반대값으로 계속
  if (isHidePromotion) {
    promotionEl.classList.add("hide"); //hide클래스추가
  } else {
    promotionEl.classList.remove("hide");
  }
});

//반복애니메이션
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //시간
    {
      //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true, //재생된거 뒤로 다시 재생
      ease: Power1.easeInOut, //애니메이션제어 easing
      delay: random(0, delay),
    }
  );
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

//스크롤계산애니메이션
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, //웹 세로로(0~1) .8 위치에서
  })
    .setClassToggle(spyEl, "show") //메소드체이닝
    .addTo(new ScrollMagic.Controller());
});
