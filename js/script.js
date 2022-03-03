const homeSlider = new Swiper(".homeSlider", {
  speed: 400,
  spaceBetween: 0,
  navigation: {
    nextEl: ".homeSlider-next",
    prevEl: ".homeSlider-prev",
  },
  pagination: {
    el: ".homeSlider-pagination",
    clickable: true,
  },
});

var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
});

const trensingNowSlider = new Swiper(".trendingNow-slider", {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".trendingNow-slider-next",
    prevEl: ".trendingNow-slider-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
