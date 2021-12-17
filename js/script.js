function createNewBox(container) {
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  container.append(newSquare);
  
  // aggiungiamo in evento-click
  newBox.addEventListener('click', function() {
    this.classList.toggle('colored');
  })
}

function setDifficulty(level) {
  /* 
  set grid
  set squares
  */
}

function startGame(difficultyLevel, difficultySelector, gridContainer) {
  // questa funzione si occupa di far sparire il selettore difficoltà,
  // di far comparire la griglia, e di passare il livello di difficoltà
  difficultySelector.classList.toggle('hide');
}

function createDifficultyButton(container, difficultyLevel, grid) {
  const newButton = document.createElement('div');
  newButton.className = `difficulty-button ${difficultyLevel}`;
  newButton.textContent = difficultyLevel;
  container.append(newButton);

  newButton.addEventListener('click', function() {
    startGame(difficultyLevel, container, grid);
  })
}

/* --------------------------------------------------- */

const difficultyLevel = ['easy', 'medium', 'hard'];
const difficultySelectorHtml = document.querySelector('.difficulty-selector');
const minefieldHtml = document.querySelector('.minefield');

for(let i = 0; i < difficultyLevel.length; i++) {
  createDifficultyButton(difficultySelectorHtml, difficultyLevel[i], minefieldHtml);
}