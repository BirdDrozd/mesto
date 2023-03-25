const config = {
	formSelector: '.popup__form',
  inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button-save',
	templateErrorSelector: '.popup__error_type_',
	inactiveButtonClass: 'popup__button-save_disable',
  inputErrorClass: 'popup__input_value_wrong',
  errorClass: 'popup__error_visible' 
}

function enableValidation(config) {
	const formList = Array.from(document.querySelectorAll(config.formSelector));
	formList.forEach(form => {
		const inputList = Array.from(form.querySelectorAll(config.inputSelector));
		const buttonSave = form.querySelector(config.submitButtonSelector);
		setEventListener(formList, inputList, buttonSave, config.templateErrorSelector, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
	})
}

function setEventListener(formList, inputList, buttonSave, templateErrorSelector, inactiveButtonClass, inputErrorClass, errorClass) {
	formList.forEach(form => {
		form.addEventListener('submit', evt => evt.preventDefault());
	});
	inputList.forEach(input => {
		input.addEventListener('input', () => {
			isInputValidity(input, templateErrorSelector, inputErrorClass, errorClass);
			toggleButtonState(inputList, buttonSave, inactiveButtonClass);
		});
	});
}

function isInputValidity(input, templateErrorSelector, inputErrorClass, errorClass) {
	const errorSpace = document.querySelector(`${templateErrorSelector}${input.name}`);
	if(input.validity.valid) {
		hideErrorInput(input, errorSpace, inputErrorClass, errorClass);
	} else {
		displayErrorInput(input, errorSpace, inputErrorClass, errorClass);
	}
}

function inputValid (inputList) {
	return inputList.every((input) => input.validity.valid);
}

function toggleButtonState (inputList, buttonSave, inactiveButtonClass){
	if(inputValid(inputList)) {
		buttonEnable(buttonSave, inactiveButtonClass);
	} else {
		buttonDisable(buttonSave, inactiveButtonClass);
	}
}
function buttonEnable (buttonSave, inactiveButtonClass) {
	buttonSave.classList.remove(inactiveButtonClass);
	buttonSave.disabled = false;
}
function buttonDisable (buttonSave, inactiveButtonClass) {
	buttonSave.classList.add(inactiveButtonClass);
	buttonSave.disabled = true;
}

function displayErrorInput (input, error, inputErrorClass, errorClass) {
	input.classList.add(inputErrorClass);
	error.textContent = input.validationMessage;
	error.classList.add(errorClass);
}
function hideErrorInput (input, error, inputErrorClass, errorClass) {
	input.classList.remove(inputErrorClass);
	error.textContent = ' ';
	error.classList.remove(errorClass);
}

enableValidation(config);