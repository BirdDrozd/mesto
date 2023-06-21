import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
	constructor({ selector, handlerSubmitForm }) {
		super({ selector });

		this._form = this._popup.querySelector('.popup__form');
		this._inputList = this._form.querySelectorAll('.popup__input');
		this._popupButtonSubmit = this._form.querySelector('.popup__button-save');
		this._popupButtonSubmitText = this._popupButtonSubmit.textContent;
		this._handlerSubmitForm = handlerSubmitForm;
	}

	_getInputValues() {
		const dataInput = {};
		this._inputList.forEach((input) => (dataInput[input.name] = input.value));

		return dataInput;
	}

	renderLoading(isLoading, loadingText = 'Сохранение...') {
		if (isLoading) {
			this._popupButtonSubmit.textContent = loadingText;
		} else {
			this._popupButtonSubmit.textContent = this._popupButtonSubmitText;
		}
	}

	setInputValues(data) {
		this._inputList.forEach((input) => {
			input.value = data[input.name];
		});
	}

	setEventListeners() {
		this._popup.addEventListener('submit', (event) => {
			event.preventDefault();

			this._handlerSubmitForm(this._getInputValues());
		});
		super.setEventListeners();
	}

	close() {
		this._form.reset();

		super.close();
	}
}

export { PopupWithForm };