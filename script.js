const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          allowSlideNext: false,
          allowSlidePrev: false
      }
  }
});
