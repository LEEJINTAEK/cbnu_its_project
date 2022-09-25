const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();   
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function() {  //focus해제 blur
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

//날짜 
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();               //textcontent-> 글자내용의 값을 알아내거나 지정  