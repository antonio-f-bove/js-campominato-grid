function createNewSquare(container, squareNumber) {
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.textContent = squareNumber;
  container.append(newSquare);
  
  // aggiungiamo in evento-click
  newSquare.addEventListener('click', function() {
    this.classList.toggle('colored');
  })
}

function generateGrid(level) {
  switch (level){
    case 'easy':
      gridSize = 49;
      break;
    case 'medium':
      gridSize = 81;
      break;
    case 'hard':
      gridSize = 100;
      break;
  }

  minefieldGridHtml.classList.add(level);

  for(let i = 1; i <= gridSize; i++) {
    createNewSquare(minefieldGridHtml, i);
  }

  // aggiungo un bottone di chiusura per tornare alla
  // pagina difficulty-selector
  const closeHtml = document.createElement('div');
  closeHtml.className = 'close-button';
  closeHtml.textContent = 'X';
  minefieldGridHtml.append(closeHtml);
  closeHtml.addEventListener('click', function () {
    toggleGameScreen();
    minefieldGridHtml.classList.remove(level);
    minefieldGridHtml.innerHTML = '';
  })
}

function toggleGameScreen() {
  // questa funzione si occupa di far sparire il selettore difficoltà,
  // di far comparire la griglia, e di passare il livello di difficoltà
  difficultySelectorHtml.classList.toggle('hide');
  minefieldGridHtml.classList.toggle('hide');
}

function createDifficultyButton(container, difficultyLevel) {
  const newButton = document.createElement('div');
  newButton.className = `difficulty-button ${difficultyLevel}`;
  newButton.textContent = difficultyLevel;
  container.append(newButton);

  newButton.addEventListener('click', function() {
    toggleGameScreen();
    generateGrid(difficultyLevel);
  })

  return newButton;
}

/* --------------------------------------------------- */

const difficultySelectorHtml = document.querySelector('.difficulty-selector');
const minefieldGridHtml = document.querySelector('.minefield');

const difficultyLevel = ['easy', 'medium', 'hard'];

let gridSize = 0;

// creazione dei bottoni
for(let i = 0; i < difficultyLevel.length; i++) {
  createDifficultyButton(difficultySelectorHtml, difficultyLevel[i]);
}

/* 
Le scelte iniziali mi hanno portato ad organizzare tutto il codice in funzioni 
incatente a cascata. Penso che per ovviare a questo avrei avuto bisogno di poter
gestire gli eventi click e le loro conseguenze in modo asincrono

mi rendo conto che ci sono un bel po di porcaround (cit) ma ho deciso di provare a 
seguire il ragionamento fino in fondo
*/