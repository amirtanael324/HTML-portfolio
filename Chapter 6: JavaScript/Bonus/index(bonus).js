var TOTAL_LIVES = 3;       
var NUM_OPTIONS = 3;       
var NEXT_ROUND_DELAY = 900; 

var lives = TOTAL_LIVES;   
var score = 0;             
var correctColour = '';    

var gameScreen    = document.getElementById('game-screen');
var endScreen     = document.getElementById('end-screen');
var rgbValue      = document.getElementById('rgb-value');
var feedback      = document.getElementById('feedback');
var optionsBox    = document.getElementById('options');
var scoreDisplay  = document.getElementById('score');
var livesDisplay  = document.getElementById('lives-display');
var finalScore    = document.getElementById('final-score');
var replayBtn     = document.getElementById('replay-btn');

function randomChannel() {
  return Math.floor(Math.random() * 256);
}

function makeColour() {
  return 'rgb(' + randomChannel() + ', ' + randomChannel() + ', ' + randomChannel() + ')';
}

function renderLives() {
  livesDisplay.innerHTML = '';

  
  for (var i = 0; i < lives; i++) {
    var heart = document.createElement('span');
    heart.textContent = '❤️';
    livesDisplay.appendChild(heart);
  }

  
  for (var j = lives; j < TOTAL_LIVES; j++) {
    var empty = document.createElement('span');
    empty.textContent = '💀';
    empty.style.opacity = '0.4';
    livesDisplay.appendChild(empty);
  }
}

function newRound() {
  
  feedback.textContent = '';
  feedback.className = '';
  optionsBox.innerHTML = '';

  
  correctColour = makeColour();

  
  rgbValue.textContent = correctColour;

  
  var colours = [correctColour];
  while (colours.length < NUM_OPTIONS) {
    colours.push(makeColour());
  }

  
  colours.sort(function() { return Math.random() - 0.5; });

  
  colours.forEach(function(colour) {
    var btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.style.backgroundColor = colour;
    btn.setAttribute('aria-label', colour);

    
    btn.addEventListener('click', function() {
      handleGuess(colour, btn);
    });

    optionsBox.appendChild(btn);
  });
}

function handleGuess(chosen, clickedBtn) {
  
  var allButtons = optionsBox.querySelectorAll('.option-btn');
  allButtons.forEach(function(b) { b.disabled = true; });

  if (chosen === correctColour) {
    
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
    feedback.textContent = 'Correct!';
    feedback.className = 'correct';
    clickedBtn.classList.add('correct');

  } else {
    
    lives--;
    renderLives();
    feedback.textContent = 'Wrong!';
    feedback.className = 'wrong';
    clickedBtn.classList.add('wrong');

    
    allButtons.forEach(function(b) {
      if (b.style.backgroundColor === correctColour) {
        b.classList.add('correct');
      }
    });
  }

  
  if (lives <= 0) {
    setTimeout(endGame, NEXT_ROUND_DELAY);
  } else {
    setTimeout(newRound, NEXT_ROUND_DELAY);
  }
}

function endGame() {
  
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  finalScore.textContent = 'You scored ' + score + ' point' + (score !== 1 ? 's' : '') + '!';
}

function resetGame() {
  lives = TOTAL_LIVES;
  score = 0;
  scoreDisplay.textContent = 'Score: 0';
  renderLives();

  
  endScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  newRound();
}

replayBtn.addEventListener('click', resetGame);

renderLives();
newRound();