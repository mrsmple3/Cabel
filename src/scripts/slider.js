//! Offer SLider
let swiperMain = new Swiper(".offer-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  speed: 500,
  navigation: {
    nextEl: ".slide-text-prev",
    prevEl: ".slide-text-prev",
  },
  simulateTouch: false,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  autoHeight: true,
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  loop: true,
});

let swiperText = new Swiper(".text-slide", {
  speed: 500,
  simulateTouch: false,
  slidesPerView: 1,
  initialSlide: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoHeight: true,
  allowTouchMove: false,
  loop: true,
});
// controller-control=".offer-slider"
swiperText.controller.control = swiperMain;
swiperMain.controller.control = swiperText;
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
  allowTouchMove: false,

  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

//! Partners
let swiperClients = new Swiper(".clients-slider", {
  navigation: {
    nextEl: ".client-slider-btn-prev",
    prevEl: ".client-slider-btn-next",
  },
  slidesPerView: 5,
  speed: 600,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});

let swiperPartners = new Swiper(".partners-slider", {
  navigation: {
    nextEl: ".partner-slider-btn-next",
    prevEl: ".partner-slider-btn-prev",
  },
  slidesPerView: 5,
  speed: 600,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
