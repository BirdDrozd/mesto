export { Card };

class Card {
  constructor (dataCards, cardTemplate, handlerCardClick) {
    this._name = dataCards.name;
    this._link = dataCards.link;
    this._cardTemplate = cardTemplate;
    this._handlerCardClick = handlerCardClick;
  }
  
  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplate).content.cloneNode(true);
      
    return cardElement;
  }
  
  _setEventListeners() {
      this._cardElementImg.addEventListener('click', this._handlerCardClick);
      this._cardElement.querySelector('.element__waste-bin').addEventListener('click', this._handlerCardButtonDelete);
      this._cardElement.querySelector('.element__button-like').addEventListener('click', this._handlerCardLike);
  }
  
  _handlerCardLike () {
      this.classList.toggle('element__button-like_active');
  };
  
  _handlerCardButtonDelete () {
      this.closest('.element__container').remove();
  };
  
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElementImg = this._cardElement.querySelector('.element__img');
  
    this._setEventListeners();
  
    this._cardElement.querySelector('.element__name').textContent = this._name;
    this._cardElementImg.setAttribute('src', this._link);
  
    return this._cardElement;
  }
}