const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1
      }
    }

  });
