'use strict';

const checkBtn = document.querySelector('#check-btn');
let input = document.querySelector('#input-num');

const ourNumber = document.querySelector('#our-number');

input.oninput = () => {
  ourNumber.innerHTML = input.value;
};

const attempts = document.querySelector('#attempts');

// computed random number
let randomNum = Math.floor(Math.random() * 10000);

randomNum = randomNum.toString().padStart(4, '0');
// console.log(randomNum);

// show random number
const secretNumber = document.querySelector('#secret-number');

secretNumber.innerHTML = randomNum;

// fill input value
if (input.length < 4) {
  input = input.padStart(4, '0');
} else if (input.length > 4) {
  input = input.substr(-4, 4);
  // console.log(input);
}

// button click
checkBtn.addEventListener('click', () => {
  // console.log(`${input.value}`);

  attempts.insertAdjacentHTML('afterend', `<li>${input.value}</li>`);
});
