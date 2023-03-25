const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Фото Архыза'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Фото Челябинской области'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Фото Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Фото Камчатки'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Фото Холмогорского район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Фото Байкала'
  }
];

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const cardAddButton = document.querySelector('.profile__button-add');
const elementsSection = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element__template');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupEditProfile = document.querySelector('#profile');
const popupEditButtonClose = popupEditProfile.querySelector('.popup__button-close');
const popupEditNameInput = popupEditProfile.querySelector('.popup__input_value_bio-name');
const popupEditAboutInput = popupEditProfile.querySelector('.popup__input_value_bio-about');
const popupEditFormSave = popupEditProfile.querySelector('.popup__form');
const popupElementAdd = document.querySelector('#element-add');
const popupElementAddButtonClose = popupElementAdd.querySelector('.popup__button-close');
const popupElementAddInputName = popupElementAdd.querySelector('.popup__input_value_place-name');
const popupElementAddInputPic = popupElementAdd.querySelector('.popup__input_value_place-pic-url');
const photoAddPopupFormSave = popupElementAdd.querySelector('.popup__form');
const popupElementFullScreen = document.querySelector('#element-full-screen');
const popupElementFullScreenButtonClose = popupElementFullScreen.querySelector('.popup__button-close');
const popupElementFullScreenName = popupElementFullScreen.querySelector('.popup__element-name');
const popupElementFullScreenImg = popupElementFullScreen.querySelector('.popup__element-img');
const popupShuts = document.querySelectorAll('.popup')

initialCards.forEach((card) => {
	const cardData = createCard(card);
	elementsSection.append(cardData);	
});

function openPopup (popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeByEscape);
}
function closePopup (popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeByEscape);
}
function createCard (card) {
	const cardElement = cardTemplate.content.cloneNode(true);
	const cardElementImg = cardElement.querySelector('.element__img');
	cardElementImg.setAttribute('src', card.link);
	cardElementImg.setAttribute('alt', card.alt);
	cardElementImg.addEventListener('click', workElementFullScreen);
	cardElement.querySelector('.element__name').textContent = card.name;
	cardElement.querySelector('.element__waste-bin').addEventListener('click', workElementButtonDelete);
	cardElement.querySelector('.element__button-like').addEventListener('click', workElementLike);
	return cardElement;
};
function addCard (card) {
	const newCard = createCard(card);
	elementsSection.prepend(newCard);	
}
function workElementLike (like) {
	like.target.classList.toggle('element__button-like_active');
};
function workElementButtonDelete (button) {
	button.target.closest('.element__container').remove();
};
function workElementFullScreen (img) {
	const actualImg = img.target.closest('.element__img');
	const actualContainer = actualImg.closest('.element__container');
	popupElementFullScreen.style = "background-color: rgba(0, 0, 0, 0.9)";
	popupElementFullScreenImg.setAttribute('src', actualImg.src);
	popupElementFullScreenImg.setAttribute('alt', actualImg.alt);
	popupElementFullScreenName.textContent = actualContainer.querySelector('.element__name').textContent;
	openPopup(popupElementFullScreen);
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

profileButtonEdit.addEventListener('click', function() {
	openPopup(popupEditProfile);
	popupEditNameInput.value = profileName.textContent;
	popupEditAboutInput.value = profileAbout.textContent;
});
cardAddButton.addEventListener('click', function() {
	openPopup(popupElementAdd, config);
	const formList = Array.from(document.querySelectorAll(config.formSelector))
	formList.forEach(form => {
		const inputList = Array.from(form.querySelectorAll(config.inputSelector))
		const buttonSave = form.querySelector(config.submitButtonSelector)
	toggleButtonState (inputList, buttonSave, config.inactiveButtonClass)
	})
});

popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupEditFormSave.addEventListener('submit', function(evt) {
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
	const newCard = {link, name, alt,};
	addCard(newCard);
	evt.target.reset();
	closePopup(popupElementAdd);
});

popupShuts.forEach((popup) => {
	popup.addEventListener('click', (evt) => evt.target === popup ? closePopup(popup) : '')
});