const cards = document.querySelectorAll(".card");
function shuffleCards() {
  cards.forEach((card) => {
    let order = Math.round(Math.random() * cards.length);
    card.style.cssText = `
    order: ${order};
    z-index: 0;
    opacity: 1;
    `;
    card.textContent = "";
  });
}
shuffleCards();

const container = document.querySelector(".cards-container");
let turns = 0;
let targetNum = [];
let targetCards = [];
let cardsTrue = [];
container.addEventListener("click", function (e) {
  e.target.classList.contains("card") ? targetCards.push(e.target) : targetCards;
  if (e.target.classList.contains("card") && turns != 2 && targetCards[0] != targetCards[1]) {
    let target = e.target.dataset.number;

    e.target.textContent = target;
    turns++;

    targetNum.push(target);

    if (turns === 2 && targetNum[0] != targetNum[1]) {
      targetCards.forEach((card) => {
        setTimeout(() => {
          card.textContent = "";
          targetNum = [];
          targetCards = [];
          turns = 0;
        }, 500);
      });
    } else if (turns === 2 && targetNum[0] == targetNum[1]) {
      targetCards.forEach((e) => {
        e.style.opacity = "0";
        e.style.zIndex = "-1";
        cardsTrue.push(e);
        if (cardsTrue.length === cards.length) {
          setTimeout(() => {
            alert("Congrats you win the game!");
            shuffleCards();
          }, 1200);
        }
      });

      targetCards = [];
      targetNum = [];
      turns = 0;
    }
  } else if (e.target.classList.contains("card") && targetCards[0] == targetCards[1]) {
    targetCards = targetCards.splice(-1);
    console.log(targetCards);
  }
});
