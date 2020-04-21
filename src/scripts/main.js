'use strict';

const area = document.querySelector('.area');
let move = 0;

area.addEventListener('click', function(e) {
  if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
    return;
  }

  if (move % 2 === 0) {
    e.target.innerHTML = 'X';
  } else {
    e.target.innerHTML = 'O';
  }
  move++;
  check();
});

function check() {
  const cells = document.getElementsByClassName('area__cell');
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < arr.length; i++) {
    if (cells[arr[i][0]].innerHTML === 'X' && cells[arr[i][1]].innerHTML === 'X'
     && cells[arr[i][2]].innerHTML === 'X') {
      say('Победили хрестики!');
    } else if (cells[arr[i][0]].innerHTML === 'O'
     && cells[arr[i][1]].innerHTML === 'O'
     && cells[arr[i][2]].innerHTML === 'O') {
      say('Победили нолики!');
    }
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML !== 'X' && cells[i].innerHTML !== 'O') {
      return;
    }
  }

  say('Ничья!');

  function say(what) {
    setTimeout(() => {
      alert(what);
      location.reload();
    }, 50);
  }
}
