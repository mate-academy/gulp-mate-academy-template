'use strict';

const checkBtn = document.querySelector('#check-btn');
const input = document.querySelector('#input-num');
const attemptsList = document.querySelector('#attempts-list');

// computed random number
let randomNum = Math.floor(Math.random() * 10000);

randomNum = randomNum.toString().padStart(4, '0');

// button click
checkBtn.addEventListener('click', e => {
  e.preventDefault();

  // fill input value
  if (input.value.length < 4) {
    input.value = input.value.padStart(4, '0');
  } else if (input.value.length > 4) {
    input.value = input.value.substr(-4, 4);
  }

  const checkResult = checkMatch(randomNum, input.value);

  if (checkResult.full === 4) {
    window.alert('Сongratulations!');
  }

  attemptsList.insertAdjacentHTML('afterbegin', `<li>${input.value} 
    <span class="green">${checkResult.full}</span> 
    <span class="yellow">${checkResult.partial}</span></li>`);

  input.value = '';
  window.console.log(randomNum);
});

function checkMatch(computedNum, userNum) {
  let fullMatch = 0;
  let partialMatch = 0;
  const result = {};

  for (let i = 0; i < computedNum.length; i++) {
    if (computedNum[i] === userNum[i]) {
      fullMatch++;
    }
  }

  for (let i = 0; i < computedNum.length; i++) {
    if (userNum.includes(computedNum[i])) {
      partialMatch++;
    }
  }

  result.full = fullMatch;
  result.partial = partialMatch - fullMatch;
  window.console.table(result);

  return result;
}
