import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];


const configValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	saveButtonSelector: '.popup__button-save',
	errorTemplateSelector: '.popup__error_type_',
	buttonErrorClass: 'popup__button-save_disable',
	inputErrorClass: 'popup__input_value_wrong',
	errorClass: 'popup__error_visible'
}

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const cardAddButton = document.querySelector('.profile__button-add');
const elementsSection = document.querySelector('.elements');
const cardTemplate = '#element__template';
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupEditProfile = document.querySelector('#profile');
const popupEditNameInput = popupEditProfile.querySelector('.popup__input_value_bio-name');
const popupEditAboutInput = popupEditProfile.querySelector('.popup__input_value_bio-about');
const popupEditFormSave = popupEditProfile.querySelector('.popup__form');
const popupElementAdd = document.querySelector('#element-add');
const popupElementAddInputName = popupElementAdd.querySelector('.popup__input_value_place-name');
const popupElementAddInputPic = popupElementAdd.querySelector('.popup__input_value_place-pic-url');
const photoAddPopupFormSave = popupElementAdd.querySelector('.popup__form');
const popupElementFullScreen = document.querySelector('#element-full-screen');
const popupElementFullScreenName = popupElementFullScreen.querySelector('.popup__element-name');
const popupElementFullScreenImg = popupElementFullScreen.querySelector('.popup__element-img');
const popupShuts = document.querySelectorAll('.popup');
/*const formList = Array.from(document.querySelectorAll(config.formSelector));*/


initialCards.forEach((card) => {
	elementsSection.append(createCard(card));	
})


function openPopup (popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeByEscape);
}
function closePopup (popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeByEscape);
}
function addCard (dataCard) {
	elementsSection.prepend(createCard(dataCard));	
}
function handlerCardLargeFormat (img) {
	const currentImg = img.target.closest('.element__img');
	const currentContainer = currentImg.closest('.element__container');
	popupElementFullScreenImg.setAttribute('src', currentImg.src);
	popupElementFullScreenImg.setAttribute('alt', currentImg.alt);
	popupElementFullScreenName.textContent = currentContainer.querySelector('.element__name').textContent;
	openPopup(popupElementFullScreen);
};
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
function createCard(dataCard) {
	const cardElement = new Card(dataCard, cardTemplate, handlerCardLargeFormat).generateCard();

	return cardElement;
}


profileButtonEdit.addEventListener('click', () => {
	openPopup(popupEditProfile);
	popupEditNameInput.value = profileName.textContent;
	popupEditAboutInput.value = profileAbout.textContent;
	popupEditFormValidator.resetValidation();
});
cardAddButton.addEventListener('click', () => {
	openPopup(popupElementAdd, configValidation);
	photoAddPopupFormValidator.resetValidation();
});


popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


popupEditFormSave.addEventListener('submit', (evt) => {
	evt.preventDefault();
	profileName.textContent = popupEditNameInput.value;
	profileAbout.textContent = popupEditAboutInput.value;
	closePopup(popupEditProfile);
});


photoAddPopupFormSave.addEventListener('submit', function(evt) {
	evt.preventDefault();
	const name = popupElementAddInputName.value;
  const link = popupElementAddInputPic.value;
	const alt = `Фото из ${name}`
	const dataCardNew = {link, name, alt,};
	addCard(dataCardNew);
	evt.target.reset();
	closePopup(popupElementAdd);
});


popupShuts.forEach((popup) => {
	popup.addEventListener('click', (evt) => evt.target === popup ? closePopup(popup) : '');
});

const popupEditFormValidator = new FormValidator(configValidation, popupEditFormSave);
const photoAddPopupFormValidator = new FormValidator(configValidation, photoAddPopupFormSave);

popupEditFormValidator.enableValidation();
photoAddPopupFormValidator.enableValidation();