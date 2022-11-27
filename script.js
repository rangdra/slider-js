const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;

for (let i = 0; i < images.length; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
  buttons.forEach((btn) => {
    btn.style.backgroundColor = 'transparent';
  });
};

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
  slideNumber = images.length;
};

right.addEventListener('click', () => {
  slideNumber < images.length ? nextSlide() : getFirstSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = 'white';
});

left.addEventListener('click', () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = 'white';
});

buttons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    resetBg();
    slider.style.transform = `translateX(-${idx * 800}px)`;
    slideNumber = idx + 1;
    btn.style.backgroundColor = 'white';
  });
});
