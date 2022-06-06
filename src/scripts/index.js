import '../styles/style.scss';
import { menuModal } from './modalMenu.js';

let inputLeft = document.getElementById('input-left'),
    inputRight = document.getElementById('input-right'),
    thumbLeft = document.querySelector('.filter__thumb--left'),
    thumbRight = document.querySelector('.filter__thumb--right'),
    range  = document.querySelector('.filter__range'),
    priceLeft = document.querySelector('.filter__price--left'),
    priceRight = document.querySelector('.filter__price--right'),
    rangeLimit = 11000;

/**
 * @function setLeftValue
 * @description sets price and position for the left range thumb
 * updates price and position on input
 * @returns {undefined}
 */
const setLeftValue = () => {
  let min = parseInt(inputLeft.min),
      max = parseInt(inputLeft.max);
  
  inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);

  if ((parseInt(inputRight.value) - parseInt(inputLeft.value)) < rangeLimit) return;

  let percent = ((inputLeft.value - min) / (max - min)) * 100;

  thumbLeft.style.left = `${percent}%`;
  range.style.left = `${percent}%`;
  
  priceLeft.style.left = `${(percent)}%`;

  if (inputLeft.value.length === 5) {
    priceLeft.textContent = inputLeft.value.replace(/\d{2}(?=.)/, '$& ');
  } else {
    priceLeft.textContent = inputLeft.value;
  }
}

setLeftValue();

/**
 * @function setRightValue
 * @description sets price and position for the right range thumb
 * updates price and position on input
 * @returns {undefined}
 */
const setRightValue = () => {
  let min = parseInt(inputRight.min),
      max = parseInt(inputRight.max);
  
  inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);

  if ((parseInt(inputRight.value) - parseInt(inputLeft.value)) < rangeLimit) return;

  let percent = ((inputRight.value - min) / (max - min)) * 100;

  thumbRight.style.right = `${(100 - percent)}%`;
  range.style.right = `${(100 - percent)}%`;
  
  priceRight.style.right = `${(100 - percent)}%`;
  
  if (inputRight.value.length === 5) {
    priceRight.textContent = inputRight.value.replace(/\d{2}(?=.)/, '$& ');
  } else {
    priceRight.textContent = inputRight.value;
  }
}

setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);

let filterShowBtn = document.querySelector('.btn--filter'),
    filterSubmitBtn = document.querySelector('.btn--submit'),
    filterModal = document.querySelector('.sidebar');

/**
 * @function displayFilter
 * @description shows/hides filter modal depending
 * on whether it's shown or hidden upon 'click' event
 * @param {click} event
 * @returns {undefined}
 */
const displayFilter = (event) => {

  if (event.target == filterSubmitBtn) {
    event.preventDefault();
  }

  if (filterModal.classList.contains('sidebar--open')) {
    filterModal.classList.toggle('sidebar--open');
  } else {
    filterModal.classList.add('sidebar--open');
  }
}

filterShowBtn.addEventListener('click', displayFilter);
filterSubmitBtn.addEventListener('click', displayFilter);

/**
 * Variable for a menu button
 * @member {HTMLElement}
 */
 let menuButton = document.querySelector('.btn--menu');

 /**
  * Shows menu modal
  * @listens click
  * @fires menuModal.showModal
  */
 menuButton.addEventListener('click', () => menuModal.showModal());