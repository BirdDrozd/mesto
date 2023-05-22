import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor ({ selector }) {
		super({ selector });
		this._image = this._popup.querySelector('.popup__element-img');
		this._name = this._popup.querySelector('.popup__element-name');
	}
	open(img) {
		this._image.setAttribute('src', img.src);
		this._name.textContent = img.name;
		super.open();
	}
}