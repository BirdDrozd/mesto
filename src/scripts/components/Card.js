class Card {
	constructor({ dataCard, cardTemplateSelector, handlerImgClick, handlerDeleteClick, handlerLikeClick, userId }) {
		this._link = dataCard.link;
		this._name = dataCard.name;
		this._alt = dataCard.name;
		this._likes = dataCard.likes;
		this._ownerId = dataCard.owner._id;
		this.id = dataCard._id;
		this._cardTemplateSelector = cardTemplateSelector;
		this._handlerImgClick = handlerImgClick;
		this._handlerDeleteClick = handlerDeleteClick;
		this._handlerLikeClick = handlerLikeClick;
		this._userId = userId;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardTemplateSelector).content.querySelector('.card__container').cloneNode(true);

		return cardElement;
	}

	_setEventListeners() {
		this._cardElementImg.addEventListener("click", () => this._handlerImgClick(this));
		this._cardElementTrashBin.addEventListener("click", () => this._handlerDeleteClick(this));
		this._cardElementLike.addEventListener("click", () => this._handlerLikeClick(this));
	}

	isLiked() {
		return this._likes.some((item) => item._id === this._userId);
	}

	setLike() {
		this._cardElementLike.classList.add("card__like-button_active");
	}

	removeLike() {
		this._cardElementLike.classList.remove("card__like-button_active");
	}

	countLikes(data) {
		this._cardElementCount.textContent = data.likes.length;
		this._likes = data.likes;
	}

	generateCard() {
		this.cardElement = this._getTemplate();
		this._cardElementImg = this.cardElement.querySelector(".card__img");
		this._cardElementLike = this.cardElement.querySelector(".card__like-button");
		this._cardElementCount = this.cardElement.querySelector(".card__liked");
		this._cardElementTrashBin = this.cardElement.querySelector(".card__waste-bin");
		if (this._ownerId !== this._userId) {
			this._cardElementTrashBin.remove();
		}
		if (this.isLiked()) {
			this.setLike();
		}

		this._cardElementImg.setAttribute("src", this._link);
		this._cardElementImg.setAttribute("alt", this._alt);
		this.cardElement.querySelector(".card__name").textContent = this._name;
		this._cardElementCount.textContent = this._likes.length;

		this._setEventListeners();

		return this.cardElement;
	}


	deleteCard() {
    this.cardElement.remove();
  }
}

export { Card };