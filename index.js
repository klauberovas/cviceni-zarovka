console.log('funguju!');

const bulbElm = document.querySelector('.bulb');

const bulbOnOffElm = () => {
  bulbElm.classList.toggle('bulb--on');
};

bulbElm.addEventListener('keydown', bulbOnOffElm);
