import { cards, dws } from "./const";

let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;

const flipCard = (event) => {
  if (boardLocked) return;

  const target = event.target.parentElement;

  if (target === firstCard) return;

  target.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = target;
  } else {
    hasFlippedCard = false;
    secondCard = target;

    checkForMatch();
  }
  dws.addEventListener("click", startNewGame);
};

const checkForMatch = () => {
  const isEqual = firstCard.dataset.img === secondCard.dataset.img;

  isEqual ? disableCards() : unFlipCards();
};

const disableCards = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
};

const unFlipCards = () => {
  boardLocked = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);
};

const startNewGame = () => {
  cards.forEach((card) => {
    card.classList.remove("flip");
    resetBoard();
    setTimeout(() => {
      addEvent();
    }, 300);
  });
  dws.removeEventListener("click", startNewGame);
};

const resetBoard = () => {
  [hasFlippedCard, boardLocked] = [false, false];
  [firstCard, secondCard] = [null, null];
};

const addEvent = () => {
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);

    const rendomIndex = Math.floor(Math.random() * cards.length);
    card.style.order = rendomIndex;
  });
};

addEvent();
