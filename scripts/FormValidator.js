export { FormValidator };

class FormValidator {
	constructor (config, form) {
		this._config = config,
		this._form = form
		this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
		this._buttonSave = this._form.querySelector(this._config.saveButtonSelector);
	}

	enableValidation() {
		this._setEventListener();
	}

	_setEventListener() {
		this._form.addEventListener('submit', evt => evt.preventDefault());
		this._inputList.forEach(_input => {
			_input.addEventListener('input', () => {
				this._isInputValidity(_input);
				this._toggleButtonState();
			});
		});
	}

	_isInputValidity(_input) {
		const _errorPlace = this._form.querySelector(`${this._config.errorTemplateSelector}${_input.name}`)
		if(_input.validity.valid) {
			this._hideInputError(_input, _errorPlace)
		} else {
			this._showInputError(_input, _errorPlace)
		}
	}
	_hideInputError(_input, _errorPlace) {
		_input.classList.remove(this._config.inputErrorClass);
		_errorPlace.textContent = ' ';
		_errorPlace.classList.remove(this._config.errorClass);
	}
	_showInputError(_input, _errorPlace) {
		_input.classList.add(this._config.inputErrorClass);
		_errorPlace.textContent = _input.validationMessage;
		_errorPlace.classList.add(this._config.errorClass);
	}

	_toggleButtonState() {
		if(this._hasInputValid(this._inputList)) {
			this._enableButton(this._buttonSave)
		} else {
			this._disableButton(this._buttonSave)
		}
	}
	_hasInputValid(_inputList) {
		return _inputList.every(_input => _input.validity.valid);
	}
	_enableButton(_buttonSave) {
		_buttonSave.classList.remove(this._config.buttonErrorClass);
		_buttonSave.disabled = false;
	}
	_disableButton(_buttonSave) {
		_buttonSave.classList.add(this._config.buttonErrorClass);
		_buttonSave.disabled = true;
	}

	resetValidation() {
		this._inputList.forEach(_input => {
			const _errorPlace = this._form.querySelector(`${this._config.errorTemplateSelector}${_input.name}`)
			this._hideInputError(_input, _errorPlace)
			this._disableButton(this._buttonSave);
		});
	}
}