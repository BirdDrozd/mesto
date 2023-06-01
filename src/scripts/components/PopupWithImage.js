import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
	constructor ({ selector }) {
		super({ selector });
		this._image = this._popup.querySelector('.popup__element-img');
		
		this._name = this._popup.querySelector('.popup__element-name');
	}
	open(name, link) {
		this._image.setAttribute('src', link);
		this._image.setAttribute('alt', name);
		this._name.textContent = name;
		super.open();
	}	
}