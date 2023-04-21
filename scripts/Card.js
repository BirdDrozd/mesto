export class Card {
  constructor (data, template, handlerCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._handlerCardClick = handlerCardClick;

    this._handleCardLike = () => {
      this._cardElementButtonLike.classList.toggle('element__button-like_active');
    };

    this._handleCardButtonDelete = () => {
      this._cardElementContainer.remove();
    };
  }
  
  _getTemplate() {
    return document.querySelector(this._template).content.cloneNode(true);
  }
  
  _setEventListeners() {
    this._cardElementImg.addEventListener('click', () => {
      this._handlerCardClick(this._name, this._link);
    });
    this._cardElementButtonDelete.addEventListener('click', this._handleCardButtonDelete);
    this._cardElementButtonLike.addEventListener('click', this._handleCardLike);
}
  
  
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElementImg = this._cardElement.querySelector('.element__img');
    this._cardElementButtonDelete = this._cardElement.querySelector('.element__waste-bin');
    this._cardElementButtonLike = this._cardElement.querySelector('.element__button-like');
    this._setEventListeners();
    this._cardElement.querySelector('.element__name').textContent = this._name;
    this._cardElementImg.setAttribute('src', this._link);
  
    return this._cardElement;
  }
}