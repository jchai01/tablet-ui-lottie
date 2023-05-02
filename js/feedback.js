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
  container: poor, 
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/poor.json'
});

lottie.loadAnimation({
  container: neutral,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/neutral.json'
});

lottie.loadAnimation({
  container: good,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/good.json'
});

lottie.loadAnimation({
  container: excellent,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../tablet_assets/lottie-icons/excellent.json'
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
