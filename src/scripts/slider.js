//! Offer SLider
let adaptLoop = window.innerWidth < 768 ? false : true;
window.addEventListener("resize", function () {
  adaptLoop = window.innerWidth < 768 ? false : true;
  swiperMain.update();
});
let swiperMain = new Swiper(".offer-slider", {
  speed: 400,
  simulateTouch: adaptLoop,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  autoHeight: true,
  fadeEffect: {
    crossFade: true,
  },
  loop: adaptLoop,
});

let swiperText = new Swiper(".text-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".slide-text-next",
    prevEl: ".slide-text-prev",
  },
  speed: 400,
  simulateTouch: adaptLoop,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoHeight: true,
  loop: adaptLoop,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

let swiperImg = new Swiper(".img-slider", {
  speed: 400,
  simulateTouch: adaptLoop,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  autoHeight: true,
  fadeEffect: {
    crossFade: true,
  },
  loop: adaptLoop,
});
swiperImg.controller.control = swiperText;
swiperMain.controller.control = swiperText;

swiperText.controller.control = [swiperMain, swiperImg];

//! Galary Slider
let swiperGalary = new Swiper(".galary-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 800,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
//! Partners
let adaptiveSlider = window.innerWidth < 768 ? 3 : 5;
let adaptSpaces = window.innerWidth < 768 ? 20 : 40;
let allowMove = window.innerWidth < 768 ? true : false;
window.addEventListener("resize", function () {
  adaptiveSlider = window.innerWidth < 768 ? 3 : 5;
  adaptSpaces = window.innerHeight < 768 ? 20 : 40;
  allowMove = window.innerWidth < 768 ? true : false;
  // Обновляем слайдеры с новым значением slidesPerView
  swiperClients.params.slidesPerView = adaptiveSlider;
  swiperClients.update();
  swiperPartners.params.slidesPerView = adaptiveSlider;
  swiperPartners.update();
  swiperBenefits.params.allowTouchMove = allowMove;
  swiperBenefits.update();
});

let swiperClients = new Swiper(".clients-slider", {
  navigation: {
    nextEl: ".client-slider-btn-prev",
    prevEl: ".client-slider-btn-next",
  },
  slidesPerView: adaptiveSlider,
  speed: 600,
  loop: true,
  spaceBetween: adaptSpaces,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    reverseDirection: true,
    pauseOnMouseEnter: true,
  },
  grabCursor: true,
});

let swiperPartners = new Swiper(".partners-slider", {
  navigation: {
    nextEl: ".partner-slider-btn-next",
    prevEl: ".partner-slider-btn-prev",
  },
  slidesPerView: adaptiveSlider,
  speed: 600,
  loop: true,
  spaceBetween: adaptSpaces,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  grabCursor: true,
});

//!benefits
let swiperBenefits = new Swiper(".benefits-slider", {
  slidesPerView: 1,
  speed: 800,
  slidesPerView: "auto",
  spaceBetween: 27,
  allowTouchMove: allowMove,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
