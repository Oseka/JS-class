const mySwiper = new Swiper('.swiper-container', {
  
  loop: false,
  speed: 400,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  }
});

const { styler, spring, listen, pointer, value } = window.popmotion;

const brand = document.querySelector('.brand');
const brandStyler = styler(brand);
const brandXY = value({ x: 0, y: 0 }, brandStyler.set);

listen(brand, 'mousedown touchstart').start(() => {
  pointer(brandXY.get())
    .start(brandXY);
});

listen(document, 'mouseup touchend').start(() => {
  spring({
    from: brandXY.get(),
    velocity: brandXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    damping: 10
  }).start(brandXY);
});