let menu = document.getElementById('burger')
let deroul = document.querySelector(".deroulant")
let icon = document.querySelector(".fa-solid")
let turn = document.getElementById('left');
let turnb = document.getElementById('rigth');
let scnd = document.querySelector('.secondimg');
let vinyle = ['secondimg', 'thirdimg', 'fourimg', 'fiveimg', 'siximg', 'sevenimg', 'eightimg', 'nineimg'];
let play = document.getElementById('player');
let infox = document.querySelector('.info');

menu.addEventListener('click', () => {
    deroul.classList.toggle('deroulant-visible')
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-xmark')
})


////////////////////////////////////////////////////////


function getNextClass(currentClass, direction) {
  let currentIndex = vinyle.indexOf(currentClass);
  let nextIndex = (currentIndex + direction + vinyle.length) % vinyle.length;
  return vinyle[nextIndex];
}

function changeImageClass(direction) {
  let currentClass = scnd.classList[0];
  let nextClass = getNextClass(currentClass, direction);
  scnd.classList.replace(currentClass, nextClass);
}

turn.addEventListener('click', () => {
  changeImageClass(1);
});

turnb.addEventListener('click', () => {
  changeImageClass(-1);
});


////////////////////////////////////////////////////////////


scnd.addEventListener('click', () => {
    scnd.classList.toggle('translate');
    turn.classList.toggle('hidden');
    turnb.classList.toggle('hidden');
    infox.classList.toggle('visible');
  });
