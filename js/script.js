const swiper = new Swiper(".homeSlider", {
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
