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
const profileNameSelector = '.profile__name';
const profileAboutSelector = '.profile__about';
const profileButtonEdit = document.querySelector('.profile__button-edit');
const cardAddButton = '.profile__button-add';
const elementsSectionSelector = '.elements';
const cardTemplateSelector = '#element__template';
const popupEditProfileSelector = '#profile';
const popupEditFormSave = '.popup__form';
const popupElementAddSelector = '#element-add';
const photoAddPopupFormSave = '.popup__form';
const popupElementFullScreenSelector = '#element-full-screen';