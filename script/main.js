let burger = document.querySelector('.burger');
let menu =  document.querySelector('.header__nav-list');
let menuLinks = document.querySelectorAll('.header__nav-link');
let headerSearch = document.querySelector('.header__search');
let searchBtnCancel = document.querySelector('.search-btn-cancel');
let searchBtn = document.querySelector('.search-btn');
let btnClose = document.querySelector('.header__btn-close')

btnClose.addEventListener('click', () => {
  menu.classList.toggle('header__nav-list_active');
  document.body.classList.toggle('stop-scroll');
})


burger.addEventListener('click', () => {
  menu.classList.toggle('header__nav-list_active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger-active');
    menu.classList.remove('header__nav-list_active');
    document.body.classList.remove('stop-scroll');
  })
})

searchBtn.addEventListener('click', () => {
  headerSearch.classList.toggle('header__search-active');
  searchBtn.classList.toggle('search-btn-deactive');
  setTimeout(() => {
    document.querySelector('.search-input').focus()
  }, 50)
})

searchBtnCancel.addEventListener('click', () => {
  headerSearch.classList.toggle('header__search-active');
  searchBtn.classList.toggle('search-btn-deactive');
  searchBtn.focus()
})

document.querySelectorAll('.work-tab__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.work-tab__btn').forEach(function(btn){
      btn.classList.remove('work-tab__btn-active')
    });

    e.currentTarget.classList.add('work-tab__btn-active');

    document.querySelectorAll('.work__card').forEach(function(tabsBtn){
      tabsBtn.classList.remove('work__card-active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('work__card-active');
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Accordion('.accordion-container');

let cunfirmCheckbox = document.querySelector('.footer-form__checkbox');
let inputCheckbox = document.querySelector('.checkbox');

inputCheckbox.addEventListener('focusin', () => cunfirmCheckbox.classList.add('focused'));
inputCheckbox.addEventListener('blur', () => cunfirmCheckbox.classList.remove('focused'));
//inputCheckbox.addEventListener('click', () => cunfirmCheckbox.classList.remove('focused'));

