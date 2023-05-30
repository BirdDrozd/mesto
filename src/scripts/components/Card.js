export class Card {
  constructor({ dataCard, cardTemplate, handlerCardClick }) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._cardTemplateSelector = cardTemplate;
    this._handlerCardClick = handlerCardClick;

    this._handleCardLike = () => {
      this._cardElementButtonLike.classList.toggle('element__button-like_active');
    };

    this._handleCardButtonDelete = () => {
      if (this._cardElement) {
        this._cardElement.remove();
      }
    };

    this._cardElementImg = null;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.element__container').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElementContainer = this._cardElement.querySelector('.element__container');
    this._cardElementImg = this._cardElement.querySelector('.element__img');
    this._cardElementButtonDelete = this._cardElement.querySelector('.element__waste-bin');
    this._cardElementButtonLike = this._cardElement.querySelector('.element__button-like');
    this._handleCardButtonDelete = this._handleCardButtonDelete.bind(this);
    this._setEventListeners();
    this._cardElement.querySelector('.element__name').textContent = this._name;
    this._cardElementImg.src = this._link; 

    console.log('Card name:', this._name);
    console.log('Card link:', this._link);

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElementImg.addEventListener('click', () => {
      this._handlerCardClick(this._name, this._link);
    });
    this._cardElementButtonDelete.addEventListener('click', () => {
      this._handleCardButtonDelete();
    });
    this._cardElementButtonLike.addEventListener('click', this._handleCardLike);
  }
}
