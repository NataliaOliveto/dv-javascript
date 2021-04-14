const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const detailElement = document.getElementById("detail");
const counterElement = document.getElementById("counter");
const counterFinalElement = document.getElementById("counterFinal");
const mensajeFinalElement = document.getElementById("mensajeFinal");

var countWin = 0;
var countLoss = 0;

buttons.forEach((button) => button.addEventListener("click", startGame));

function startGame(event) {

  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  // Settear ganador, elecciones y cantidad de victorias
  resultElement.textContent = winner;
  detailElement.textContent = `Con ${translateChoice(playerChoice)} contra ${translateChoice(computerChoice)}`;
  counterElement.textContent = `Ganaste ${countWin} veces. Perdiste ${countLoss} veces`;
  counterFinalElement.textContent = `${countWin} - ${countLoss}`;
  mensajeFinalElement.textContent = ``;

  // Validar si se continua el juego o se reinicia
  continueGame();

  }

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    countWin++;
    return "GANASTE";
  } else if (playerChoice === computerChoice) {
    return "EMPATASTE";
  } else {
    countLoss++;
    return "PERDISTE";
  }
}

// Traducción de opciones al español
function translateChoice(choice){
  if(choice === "rock"){
    return "roca";
  } else if (choice === "paper"){
    return "papel";
  } else if (choice === "scissors"){
    return "tijeras";
  }
}

// Reiniciar el juego
function endGame(){
  countWin = 0;
  countLoss = 0;
  startGame;
}

// Validar si se continua o se reinicia
function continueGame(){
  if (countWin === 3){
    mensajeFinalElement.textContent = `¡GANASTE, FELICITACIONES!`;
    endGame();
  } else if (countLoss === 3) {
    mensajeFinalElement.textContent = `¡UNA LÁSTIMA, PERDISTE!`;
    endGame();
  }
}