const cards = document.querySelectorAll(".card");
function shuffleCards() {
  cards.forEach((card) => {
    let order = Math.round(Math.random() * cards.length);
    card.style.cssText = `
    order: ${order};
    z-index: 0;
    opacity: 1;
    `;
    // card.style.order = order;
    // card.style.zIndex = "0";
    // card.style.opacity = "1";
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
    // if (turns != 2) {
    let target = e.target.dataset.number;

    e.target.textContent = target;
    turns++;

    targetNum.push(target);

    //   setTimeout(() => {}, 2000);
    if (turns === 2 && targetNum[0] != targetNum[1]) {
      targetCards.forEach((card) => {
        setTimeout(() => {
          card.textContent = "";
          targetNum = [];
          targetCards = [];
          turns = 0;
        }, 500);
      });
      //   argetNum[0].dataset.number != targetNum[1].dataset.number
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
    // }
    console.log(turns);
    console.log(targetNum);
    console.log(targetCards);
    console.log(cardsTrue);
  } else if (e.target.classList.contains("card") && targetCards[0] == targetCards[1]) {
    targetCards = targetCards.splice(-1);
    console.log(targetCards);
  }
});
