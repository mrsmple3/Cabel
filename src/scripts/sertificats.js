document.addEventListener("DOMContentLoaded", function () {
  //!Slider
  let adaptiveSlider = window.innerWidth < 768 ? 1 : 5;
  let adaptSpaces = window.innerWidth < 1110 ? 15 : 36;
  window.addEventListener("resize", function () {
    adaptiveSlider = window.innerWidth < 768 ? 1 : 5;
    adaptSpaces = window.innerWidth < 1110 ? 15 : 36;
    swiperSertificats.params.slidesPerView = adaptiveSlider;
    swiperSertificats.params.spaceBetween = adaptSpaces;
    swiperSertificats.update();
  });
  let swiperSertificats = new Swiper(".sertificats-slider", {
    navigation: {
      nextEl: ".swiper-sertificats-button-next",
      prevEl: ".swiper-sertificats-button-prev",
    },
    slidesPerView: adaptiveSlider,
    speed: 800,
    loop: true,
    spaceBetween: adaptSpaces,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    grabCursor: true,
  });
});
