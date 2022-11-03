import lottie from 'lottie-web';

const rightFrame = lottie.loadAnimation({
  container: document.querySelector('.right-frame-svg'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../image-right.json'
});

const leftFrame = lottie.loadAnimation({
  container: document.querySelector('.left-frame-svg'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../image-left.json'
});




