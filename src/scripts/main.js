'use strict';

const feild = document.querySelector('.feild');
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const crosses = [];
const zeros = [];
const filledEls = [];
let isFirstPlayer = true;

feild.style.visibility = 'hidden';

const goalToWin = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

function initGame() {
  crosses.length = 0;
  zeros.length = 0;
  filledEls.length = 0;
  isFirstPlayer = true;
  message.innerHTML = '';
  feild.style.visibility = 'visible';

  [...feild.children].forEach(child => {
    child.innerHTML = '';
  });

  feild.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.matches('.cell')) {
      return;
    }

    function checked(arr) {
      const isSuccess = goalToWin.findIndex(item =>
        item.every(el => arr.includes(el)));

      if (isSuccess !== -1) {
        crossResult(isSuccess);
      }

      if ((isSuccess === -1) && (filledEls.length === 9)) {
        setTimeout(() => showResult(true), 500);
      }
    }

    function crossResult(ind) {
      const hCrossedEls = [0, 6, 7];
      const vCrossedEls = [1, 3, 4];
      const indexFirstEl = goalToWin[ind][0] - 1;
      const hr = document.createElement('hr');

      if (hCrossedEls.includes(ind)) {
        hr.classList.add('horisontal');
      }

      if (vCrossedEls.includes(ind)) {
        hr.classList.add('vertical');
      }

      if (ind === 2) {
        hr.classList.add('crossed1_9');
      }

      if (ind === 5) {
        hr.classList.add('crossed3_7');
      }

      const firstElement = [...feild.children][indexFirstEl];

      firstElement.prepend(hr);

      setTimeout(() => showResult(false), 500);
    }

    for (let i = 0; i < [...feild.children].length; i++) {
      if (target === [...feild.children][i]) {
        if (isFirstPlayer) {
          if (zeros.includes(i + 1)) {
            return;
          }
          target.innerHTML = 'X';
          crosses.push(i + 1);
          filledEls.push(i + 1);
          checked(crosses);
        } else {
          if (crosses.includes(i + 1)) {
            return;
          }
          target.innerHTML = 'O';
          zeros.push(i + 1);
          filledEls.push(i + 1);
          checked(zeros);
        }

        isFirstPlayer = !isFirstPlayer;
      }
    }

    function showResult(arg) {
      feild.style.visibility = 'hidden';

      if (arg) {
        message.innerHTML = `Dead heat`;
      } else {
        isFirstPlayer
          ? message.innerHTML = `Second player won`
          : message.innerHTML = `First player <br/>won`;
      }
      isFirstPlayer = true;
    }
  });
}

button.addEventListener('click', (e) => {
  initGame();
});
