import { Popup } from './Popup.js'

class PopupWithImage extends Popup {
	constructor ({ selector }) {
		super({ selector });
		this._image = this._popup.querySelector('.popup__card-img');
		this._name = this._popup.querySelector('.popup__card-name');
	}
	open(img) {
		this._image.setAttribute('src', img.link);
		this._image.setAttribute('alt', img.alt);
		this._name.textContent = img.name;
		super.open()
	}
}

export { PopupWithImage }