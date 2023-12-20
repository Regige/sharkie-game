let canvas;
let world;
let keyboard = new Keyboard();
let lastMovement = new Date().getTime();
let toggle = true;


/**
 * Defines the canvas
 */
function init() {
    canvas = document.getElementById('canvas');
  }
  

/**
 * Defines the world as a new object and starts the games functionality
 */
function startGame() {
    world = new World(canvas, keyboard);
    document.getElementById('start-menu').classList.add('d-none');
    document.getElementById('expand-bt').classList.remove('d-none');
    document.getElementById('sound-btn').classList.remove('d-none');
    renderControlBtn();
    setCtrlBtnsTouchEvent();
}



/**
 * Opens Popup Window with the control explanations
 */
function openControlWindow() {
  let controlWindow = document.getElementById('control-window-con');
  controlWindow.innerHTML = /*html*/`
    <div class="control-window">
      <div class="ctrl-window-close-con"><div class="ctrl-window-close" onclick="closeCtrlWindow()"></div></div>
      <div class="d-flx ctrl-window-con">
        <div class="d-flx-col ctrl-window-images">
          <img class="control-img-1" src="img_Sharkie/6.Botones/Key/arrow keys.png" alt="">
          <img class="control-img-2-3" src="img_Sharkie/6.Botones/Key/D key.png" alt="">
          <img class="control-img-2-3" src="img_Sharkie/6.Botones/Key/Space Bar key.png" alt="">
        </div>
        <div class="d-flx-col ctrl-window-text">
          <h2 class="ctrl-text-1">MOVE</h2>
          <h2 class="ctrl-text-2">BUBBLE ATTACK</h2>
          <h2 class="ctrl-text-3">POISONED BUBBLE ATTACK</h2>
        </div>
      </div>
    <div>
  `
}


/**
 * Closes Popup Window with the control explanations
 */
function closeCtrlWindow() {
  let controlWindow = document.getElementById('control-window-con');
  controlWindow.innerHTML = "";
}


/**
 * Renders control buttons for mobile use
 */
function renderControlBtn() {
  document.getElementById('ctrl-bt-main-con').innerHTML = /*html*/`
        <div class="ctrl-bt-con-left">
          <div id="bt-up" class="ctrl-bt ctrl-bt-up"></div>
          <div id="bt-down" class="ctrl-bt ctrl-bt-down"></div>
        </div>
        <div class="ctrl-bt-con-right d-flx">
          <div class="d-flx-col">
            <img
              id="bt-bubl"
              class="ctrl-img"
              src="img_Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png"
              alt=""
            />
            <div id="bt-left" class="ctrl-bt ctrl-bt-left"></div>
          </div>
          <div class="d-flx-col">
            <img
              id="bt-bubl-posn"
              class="ctrl-img"
              src="img_Sharkie/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png"
              alt=""
            />
            <div id="bt-right" class="ctrl-bt ctrl-bt-right"></div>
          </div>
        </div>
  `
}


/**
 * Sets EventListener for specific keys
 */
window.addEventListener("keydown", keyDownEvent);
    
function keyDownEvent(e) {
  switch (e.key) {
      case "ArrowDown":
            keyboard.DOWN = true;
            lastMovement = new Date().getTime();
        break;
      case "ArrowUp":
            keyboard.UP = true;
            lastMovement = new Date().getTime();
        break;
      case "ArrowLeft":
            keyboard.LEFT = true;
            lastMovement = new Date().getTime();
        break;
      case "ArrowRight":
            keyboard.RIGHT = true;
            lastMovement = new Date().getTime();
        break;
      case " ":
            keyboard.SPACE = true;
            lastMovement = new Date().getTime();
        break;
      case "d":
            keyboard.D = true;
            lastMovement = new Date().getTime();
        break;
    }
}


/**
 * Sets EventListener for specific keys
 */
window.addEventListener("keyup", keyUpEvent);

function keyUpEvent(e) {
    switch (e.key) {
      case "ArrowDown":
            keyboard.DOWN = false;
        break;
      case "ArrowUp":
            keyboard.UP = false;
        break;
      case "ArrowLeft":
            keyboard.LEFT = false;
        break;
      case "ArrowRight":
            keyboard.RIGHT = false;
        break;
      case " ":
            keyboard.SPACE = false;
        break;
      case "d":
            keyboard.D = false;
        break;
    }
}


/**
 * Sets EventListener for specific buttons
 */
function setCtrlBtnsTouchEvent() {
  document.getElementById('bt-up').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById('bt-up').addEventListener('touchend', (e)=> {
   e.preventDefault();
   keyboard.UP = false;
  });

  document.getElementById('bt-down').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });

  document.getElementById('bt-down').addEventListener('touchend', (e)=> {
   e.preventDefault();
   keyboard.DOWN = false;
  });

  document.getElementById('bt-left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById('bt-left').addEventListener('touchend', (e)=> {
   e.preventDefault();
   keyboard.LEFT = false;
  });

  document.getElementById('bt-right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById('bt-right').addEventListener('touchend', (e)=> {
   e.preventDefault();
   keyboard.RIGHT = false;
  });

  document.getElementById('bt-bubl').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById('bt-bubl').addEventListener('touchend', (e)=> {
   e.preventDefault();
   keyboard.D = false;
  });

  document.getElementById('bt-bubl-posn').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById('bt-bubl-posn').addEventListener('touchend', (e)=> {
   e.preventDefault();
   keyboard.SPACE = false;
  });

}


/**
 * Either calls the functin to turn on or off the sound
 */
function setSound() {
  if(!world.sound) {
    turnOnSound();
  } else if(world.sound) {
    turnOffSound();
  }
}


/**
 * Turns on the sound on the sound button
 */
function turnOnSound() {
  world.sound = true;
  let soundBtn = document.getElementById('sound-btn');
  soundBtn.style.backgroundImage = "url('img_Sharkie/6.Botones/loud.svg')";

  world.background_sound_enemy.volume = 0.5;
  world.background_sound.volume = 0.08;
  world.level.collectibles.forEach(collectible => {
    collectible.collecting_sound.volume = 0.1;
  });
  world.level.enemies[0].hurt_sound.volume = 0.2;
  world.character.hurt_sound.volume = 0.2;
  world.level.enemies[0].success_sound.volume = 1;
  world.character.swimming_sound.volume = 1;
  world.character.lose_sound.volume = 1;
}


/**
 * Turns off the sound on the sound button
 */
function turnOffSound() {
  world.sound = false;
  let soundBtn = document.getElementById('sound-btn');
  soundBtn.style.backgroundImage = "url('img_Sharkie/6.Botones/silenc.svg')";

  world.background_sound_enemy.volume = 0;
  world.background_sound.volume = 0;
  world.level.collectibles.forEach(collectible => {
    collectible.collecting_sound.volume = 0;
  });
  world.level.enemies[0].hurt_sound.volume = 0;
  world.character.hurt_sound.volume = 0;
  world.level.enemies[0].success_sound.volume = 0;
  world.character.swimming_sound.volume = 0;
  world.character.lose_sound.volume = 0;
}


/**
 * Defines the element to display as fullscreen and calls the function to eiter activate or deactivate the fullscreen
 */
function fullscreen() {
  let elem = document.documentElement;

  if(toggle) {
      openFullscreen(elem);
      toggle = false;
  } else if(!toggle) {
      closeFullscreen(elem)
      toggle = true;
  }
}


/**
 * Calls the function to activate the fullscreen
 * @param {*} elem element to display as fullscreen
 */
function openFullscreen(elem) {
  let fullscreenBt = document.getElementById('expand-bt');
  fullscreenBt.style.backgroundImage = "url('img_Sharkie/6.Botones/compress_white.svg')";

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


/**
 * Calls the function to deactivate the fullscreen
 */
function closeFullscreen() {
  let fullscreenBt = document.getElementById('expand-bt');
  fullscreenBt.style.backgroundImage = "url('img_Sharkie/6.Botones/expand_white.svg')";

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


