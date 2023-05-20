setTimeout(
    () => {
        window.location.replace("home.html");
    }, 5000
);

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

veryPoor.addEventListener('click', async () => {
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/test')
    .then((response) => {
      console.log(response)
    });
});

poor.addEventListener('click', async () => {
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/test')
    .then((response) => {
      console.log(response)
    });
});

neutral.addEventListener('click', async () => {
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/test')
    .then((response) => {
      console.log(response)
    });
});

good.addEventListener('click', async () => {
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/test')
    .then((response) => {
      console.log(response)
    });
});

excellent.addEventListener('click', async () => {
    window.location.href = "thankyou.html";
    await fetch('http://localhost:1234/test')
    .then((response) => {
      console.log(response)
    });
});
