export {
	configValidation,
	avatarPageSelector,
	avatarPageButtonOpen,
	userNamePageSelector,
	userAboutPageSelector,
	userPageButtonOpen,
	cardAddPageButtonOpen,
	sectionCardsPageSelector,
	cardTemplatePageId,
	avatarPopupId,
	avatarPopupForm,
	userPopupId,
	userPopupForm,
	cardAddPopupSelector,
	cardAddPopupForm,
	cardLargePopupSelector,
	submitPopupSelector,
};

const configValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	saveButtonSelector: '.popup__button-save',
	errorTemplateSelector: '.popup__error_type_',
	buttonErrorClass: 'popup__button-save_disable',
	inputErrorClass: 'popup__input_value_uncorrect',
	errorClass: 'popup__error_visible',
};


const avatarPageSelector = '.user__avatar';
const avatarPageButtonOpen = document.querySelector('.user__avatar-wrap');
const userNamePageSelector = '.user__name';
const userAboutPageSelector = '.user__about';
const userPageButtonOpen = document.querySelector('.user__button-edit');
const cardAddPageButtonOpen = document.querySelector('.user__button-add');
const sectionCardsPageSelector = '.card';
const cardTemplatePageId = '#card__template';
const avatarPopupId = '#avatar';
const avatarEditPopup = document.querySelector('#avatar');
const avatarPopupForm = avatarEditPopup.querySelector('.popup__form');
const userPopupId = '#user';
const userEditPopup = document.querySelector('#user');
const userPopupForm = userEditPopup.querySelector('.popup__form');
const cardAddPopupSelector = '#card-add';
const cardAddPopupForm = document
	.querySelector(cardAddPopupSelector)
	.querySelector('.popup__form');
const cardLargePopupSelector = '#card-full-screen';
const submitPopupSelector = '#submit';
