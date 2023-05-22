export { 
  initialCards,
  configValidation,
  profileNameSelector,
  profileAboutSelector,
  profileButtonEdit,
  cardAddButton,
  elementsSectionSelector,
  cardTemplateSelector,
  popupEditProfileSelector,
  popupEditFormSave,
  popupElementAddSelector,
  photoAddPopupFormSave,
  popupElementFullScreenSelector
};
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
};
const profileNameSelector = document.querySelector('.profile__name');
const profileAboutSelector = document.querySelector('.profile__about');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const cardAddButton = document.querySelector('.profile__button-add');
const elementsSectionSelector = document.querySelector('.elements');
const cardTemplateSelector = '#element__template';
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupEditProfileSelector = document.querySelector('#profile');
const popupEditNameInput = popupEditProfileSelector.querySelector('.popup__input_value_bio-name');
const popupEditAboutInput = popupEditProfileSelector.querySelector('.popup__input_value_bio-about');
const popupEditFormSave = popupEditProfileSelector.querySelector('.popup__form');
const popupElementAddSelector = document.querySelector('#element-add');
const photoAddPopupFormSave = popupElementAddSelector.querySelector('.popup__form');
const popupElementFullScreenSelector = document.querySelector('#element-full-screen');