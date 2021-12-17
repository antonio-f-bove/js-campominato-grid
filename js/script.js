function createNewBox(container) {
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  container.append(newSquare);
  
  // aggiungiamo in evento-click
  newBox.addEventListener('click', function() {
    this.classList.toggle('colored');
  })
}

function startGame(difficultySelector, gridContainer, difficultyLevel) {
  difficultySelector
}

function createDifficultyButton(container, difficultyLevel) {
  const newButton = document.createElement('div');
  newButton.className = `difficulty-button ${difficultyLevel}`;
  container.append(newButton);

  newButton.addEventListener('click', function() {
    startGame(difficultyLevel);
  })
}

/* --------------------------------------------------- */

const difficultyLevel = ['easy', 'medium', 'hard'];
const difficultySelectorHtml = document.querySelector('difficulty-selector');

for(let i = 0; i < difficultyLevel.length; i++) {
  createDifficultyButton(difficultySelectorHtml, difficultyLevel[i]);
}