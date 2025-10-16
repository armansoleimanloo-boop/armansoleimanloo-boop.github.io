    const mySwiper = new Swiper('.my-digi-swiper', {
      loop: true,               // حلقه خودکار
      autoplay: {
        delay: 3000,            // تایمر 3 ثانیه
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });