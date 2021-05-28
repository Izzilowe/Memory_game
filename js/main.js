const cards = document.querySelectorAll(".memory-card");

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

    // Check for match
    checkForMatch();
  }
};

const checkForMatch = () => {
  const isEqual = firstCard.dataset.img === secondCard.dataset.img;

  isEqual ? disableCards() : unFlipCards();

  //   if (firstCard.dataset.lol === secondCard.dataset.lol) {
  //     disableCards();
  //   } else {
  //     unFlipCards();
  //   }
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

const resetBoard = () => {
    [hasFlippedCard, boardLocked] = [false, false]
    [firstCard, secondCard] = [null, null]
};

cards.forEach((card) => {
  // Add Event Listner
  card.addEventListener("click", flipCard);

  const rendomIndex = Math.floor(Math.random() * cards.length);
  card.style.order = rendomIndex;
});
