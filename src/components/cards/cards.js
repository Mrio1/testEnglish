import "./cards.scss";

class Cards {
  constructor(cardsData) {
    this.cardsData = cardsData;
  }

  getCardListHtml() {
    const cardsList = document.createDocumentFragment();
    this.cardsData.forEach((cardData) => {
      const card = this.getCardHtml(cardData);
      cardsList.append(card);
    });
    return cardsList;
  }

  getCardHtml(cardData) {
    const card = document.createElement("div");
    const cardClass = "card";
    const [word, translate] = cardData;
    card.dataset.word = word;
    card.innerHTML = `
            <div class = '${cardClass}__front'>
                <h2>${word}</h2>
            </div>
            <div class = '${cardClass}__back'>
                <h2>${translate}</h2>
            </div>
            <audio id='${word}-audio' src="./assets/audio/${word}.mp3">
        `;
    card.className = cardClass;
    card.addEventListener("click", () => {
      this.cardEventAction(word);
    });
    return card;
  }

  cardEventAction(word) {
    const audio = document.getElementById(`${word}-audio`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  }
}

export default Cards;
