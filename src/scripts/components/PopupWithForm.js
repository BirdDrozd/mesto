import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
	constructor ({ selector, handleSubmitForm }) {
		super({ selector });

		this._form = this._popup.querySelector('.popup__form');
		this._inputList = this._form.querySelectorAll('.popup__input');
		this._handleSubmitForm = handleSubmitForm;
	}

	_getInputValues() {
		const dataInput = {};
		this._inputList.forEach(input => dataInput[input.name] = input.value);

		console.log('Input values:', dataInput);
		
		return dataInput;
	}

	setInputValues(data) {
		this._inputList.forEach((input) => {
			input.value = data[input.name];
		});
	}

	setEventListeners() {
		this._popup.addEventListener('submit', (event) => {
			event.preventDefault();
			this._handleSubmitForm(this._getInputValues());
		});

		console.log('Form event listeners added');

		super.setEventListeners();
	}

	close() {
		this._form.reset();

		super.close();
	}
}