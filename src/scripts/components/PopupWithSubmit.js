import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
	constructor({ selector, handlerSubmitForm }) {
		super({ selector });

		this._handleSubmitForm = handlerSubmitForm;
	}

	open(data) {
		this.data = data;

		super.open();
	}

	setEventListeners() {
		this._popup.addEventListener('submit', (event) => {
			event.preventDefault();
			this._handleSubmitForm(this.data);
		});
		super.setEventListeners();
	}
}

export { PopupWithSubmit };
