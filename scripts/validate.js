function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(form => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const buttonSave = form.querySelector(config.submitButtonSelector);
    setEventListener(form, inputList, buttonSave, config);
  })
}

function setEventListener(form, inputList, buttonSave, config) {
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isInputValidity(input, form, config);
      toggleButtonState(inputList, buttonSave, config.inactiveButtonClass);
    });
  });
}

function isInputValidity(input, form, config) {
  const error = form.querySelector(`${config.templateErrorSelector}${input.name}`);
  if (input.validity.valid) {
    hideErrorInput(input, form, config);
  } else {
    displayErrorInput(input, form, config, error);
  }
}

function inputValid(inputList) {
  return inputList.every(input => input.validity.valid);
}

function toggleButtonState(inputList, buttonSave, inactiveButtonClass) {
  if (inputValid(inputList)) {
    buttonEnable(buttonSave, inactiveButtonClass);
  } else {
    buttonDisable(buttonSave, inactiveButtonClass);
  }
}

function buttonEnable(buttonSave, inactiveButtonClass) {
  buttonSave.classList.remove(inactiveButtonClass);
  buttonSave.disabled = false;
}

function buttonDisable(buttonSave, inactiveButtonClass) {
  buttonSave.classList.add(inactiveButtonClass);
  buttonSave.disabled = true;
}

function displayErrorInput(input, form, config) {
  const error = form.querySelector(`${config.templateErrorSelector}${input.name}`);
  input.classList.add(config.inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(config.errorClass);
  error.style.display = 'block';
}

function hideErrorInput(input, form, config) {
  const error = form.querySelector(`${config.templateErrorSelector}${input.name}`);
  input.classList.remove(config.inputErrorClass);
  error.textContent = ' ';
  error.classList.remove(config.errorClass);
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  templateErrorSelector: '.popup__error_type_',
  inactiveButtonClass: 'popup__button-save_disable',
  inputErrorClass: 'popup__input_value_wrong',
  errorClass: 'popup__error_visible',
};

enableValidation(config);