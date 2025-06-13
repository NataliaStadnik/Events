import 'babel-polyfill';
import './scss/utilits/normalize.scss';
import './scss/style.scss';

import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const scrollItem = document.querySelectorAll('.principles-list__item');
  const dots = document.querySelectorAll('.location__elem');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          dots.forEach((dot) => (dot.style.backgroundColor = 'gray'));
          dots[index].style.backgroundColor = 'black';
        }
      });
    },
    { threshold: 0.5 },
  );

  scrollItem.forEach((photo) => observer.observe(photo));

  new Swiper('.photo-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    coverflowEffect: {
      rotate: 10,
      depth: 200,
      modifier: 1.8,
      stretch: 100,
      shadow: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
    },
    keyboard: {
      enabled: true,
    },
  });
});
