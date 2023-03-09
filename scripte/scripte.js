let menu = document.getElementById('burger')
let deroul = document.querySelector(".deroulant")
let icon = document.querySelector(".fa-solid")
let turn = document.getElementById('left');
let turnb = document.getElementById('rigth');
let scnd = document.querySelector('.secondimg');
let vinyle = ['secondimg', 'thirdimg', 'fourimg', 'fiveimg', 'siximg', 'sevenimg', 'eightimg', 'nineimg'];
let play = document.getElementById('player');
let infox = document.querySelector('.info');
let rotat = document.getElementById('playpause')
let mutee = document.getElementById('mute')
let vol = document.getElementById('volume');


menu.addEventListener('click', () => {
    deroul.classList.toggle('deroulant-visible')
    // icon.classList.toggle('fa-xmark')
})

////////////////////////////////////////////////////////

rotat.addEventListener('click', () => {
  scnd.classList.toggle('rotation')
  rotat.classList.toggle('fa-play')
  rotat.classList.toggle('fa-pause')
 
})

////////////////////////////////////////////////////////


mutee.addEventListener('click', () => {
  mutee.classList.toggle('fa-volume-high')
  mutee.classList.toggle('fa-volume-xmark')
  if (vol.value !== '0')
      {xx = vol.value
      vol.value = '0'}
  else {vol.value = xx} });

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
  scnd.classList.remove('rotation')
  rotat.classList.replace('fa-pause', 'fa-play')
});

turnb.addEventListener('click', () => {
  changeImageClass(-1);
  scnd.classList.remove('rotation')
  rotat.classList.replace('fa-pause', 'fa-play')
  
});


////////////////////////////////////////////////////////////


scnd.addEventListener('click', () => {
    scnd.classList.toggle('translate');
    turn.classList.toggle('le');
    turnb.classList.toggle('ri');
    infox.classList.toggle('visible');
  });
