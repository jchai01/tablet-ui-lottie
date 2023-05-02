let veryPoor = document.querySelector('#very-poor');
let poor = document.querySelector('#poor');
let neutral = document.querySelector('#neutral');
let good = document.querySelector('#good');
let excellent = document.querySelector('#excellent');

lottie.loadAnimation({
  container: veryPoor, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/very-poor.json' // the path to the animation json
});

lottie.loadAnimation({
  container: poor, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/poor.json' // the path to the animation json
});

lottie.loadAnimation({
  container: neutral, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/neutral.json' // the path to the animation json
});

lottie.loadAnimation({
  container: good, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/good.json' // the path to the animation json
});

lottie.loadAnimation({
  container: excellent, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/excellent.json' // the path to the animation json
});

veryPoor.addEventListener('click', function() {
  alert("selected very poor");
});

poor.addEventListener('click', function() {
  alert("selected poor");
});

neutral.addEventListener('click', function() {
  alert("selected neutral");
});

good.addEventListener('click', function() {
  alert("selected good");
});

excellent.addEventListener('click', function() {
  alert("selected excellent");
});
