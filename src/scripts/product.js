//!Slider
//offer
let swiperProduct = new Swiper(".products_offer", {
  navigation: {
    nextEl: ".swiper-offer-button-next",
    prevEl: ".swiper-offer-button-prev",
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
let adaptiveSlider = window.innerWidth < 768 ? 2 : 4;
let adaptSpaces = window.innerWidth < 768 ? 10 : 45;
window.addEventListener("resize", function () {
  adaptiveSlider = window.innerWidth < 768 ? 2 : 4;
  adaptSpaces = window.innerHeight < 768 ? 10 : 45;
  swiperRecomendation.params.slidesPerView = adaptiveSlider;
  swiperRecomendation.params.spaceBetween = adaptSpaces;
  swiperRecomendation.update();
});
let swiperRecomendation = new Swiper(".recomendation-slider", {
  navigation: {
    nextEl: ".recomendation-slider-btn-next",
    prevEl: ".recomendation-slider-btn-prev",
  },
  slidesPerView: adaptiveSlider,
  speed: 800,
  loop: true,
  spaceBetween: adaptSpaces,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  grabCursor: true,
});

//Tabs
const tabBtnDescription = document.querySelector(".tab_1");
const tabBtnConstructor = document.querySelector(".tab_2");
const tabDescription = document.getElementById("tab_description");
const tabConstructor = document.getElementById("tab_constructor");

tabBtnConstructor.addEventListener("click", () => {
  tabBtnDescription.classList.remove("active");
  tabDescription.classList.remove("active");
  tabBtnConstructor.classList.add("active");
  tabConstructor.classList.add("active");
});
tabBtnDescription.addEventListener("click", () => {
  tabBtnConstructor.classList.remove("active");
  tabConstructor.classList.remove("active");
  tabBtnDescription.classList.add("active");
  tabDescription.classList.add("active");
});

//!popup
const popupOpenBnt = document.getElementById("popup_btn");
const popup = document.querySelector(".popup");
const closePopupBtn = document.getElementById("close_popup");

popupOpenBnt.addEventListener("click", () => {
  if (!popup.classList.contains("active")) {
    popup.classList.add("active");
  }
});
closePopupBtn.addEventListener("click", () => {
  if (popup.classList.contains("active")) {
    popup.classList.remove("active");
  }
});
