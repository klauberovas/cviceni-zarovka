console.log('funguju!');

const bulbElm = document.querySelector('.bulb');

document.addEventListener('keydown', () => {
  console.log('fired');
  bulbElm.classList.toggle('bulb--on');
});
