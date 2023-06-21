import { Api } from '../scripts/components/Api.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import {
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
} from '../scripts/utils/constants.js';
import './index.css';
import { PopupWithSubmit } from '../scripts/components/PopupWithSubmit.js';

const userInfo = new UserInfo({
	selectorAvatar: avatarPageSelector,
	selectorName: userNamePageSelector,
	selectorAbout: userAboutPageSelector,
});

const popupEditAvatar = new PopupWithForm({
	selector: avatarPopupId,
	handlerSubmitForm: (data) => {
		function makeRequest() {
			return api
				.updateUserAvatar(data.link)
				.then((userAvatar) => userInfo.setUserInfo(userAvatar));
		}
		handlerSubmit(makeRequest, popupEditAvatar);
	},
});

const popupEditUser = new PopupWithForm({
	selector: userPopupId,
	handlerSubmitForm: (data) => {
		function makeRequest() {
			return api
				.updateUserInfo(data)
				.then((userData) => userInfo.setUserInfo(userData));
		}
		handlerSubmit(makeRequest, popupEditUser);
	},
});

const popupCardAdd = new PopupWithForm({
	selector: cardAddPopupSelector,
	handlerSubmitForm: (data) => {
		function makeRequest() {
			return api
				.addCard(data)
				.then((res) => sectionCards.addNewItem(createCard(res)));
		}
		handlerSubmit(makeRequest, popupCardAdd);
	},
});

const popupWithImage = new PopupWithImage({ selector: cardLargePopupSelector });

const popupWithSubmit = new PopupWithSubmit({
	selector: submitPopupSelector,
	handlerSubmitForm: (card) => {
		api
			.deleteCard(card.id)
			.then(() => {
				card.deleteCard();
				popupWithSubmit.close();
			})
			.catch((error) => console.error(`Ошибка: ${error}`));
	},
});

const sectionCards = new Section({
	renderer: (data) => {
		sectionCards.addRenderedItem(createCard(data));
	},
	selector: sectionCardsPageSelector,
});

function createCard(data) {
	const card = new Card({
		dataCard: data,
		cardTemplateSelector: cardTemplatePageId,
		handlerImgClick: () => popupWithImage.open(data),
		handlerDeleteClick: () => popupWithSubmit.open(card),
		handlerLikeClick: () => handlerLikeClick(card),
		userId: userId,
	});

	return card.generateCard();
}

function handlerLikeClick(card) {
	if (card.isLiked()) {
		api
			.removeLike(card.id)
			.then((likes) => {
				card.removeLike();
				card.countLikes(likes);
			})
			.catch((error) => console.error(`Ошибка: ${error}`));
	} else {
		api
			.setLike(card.id)
			.then((likes) => {
				card.setLike();
				card.countLikes(likes);
			})
			.catch((error) => console.error(`Ошибка: ${error}`));
	}
}

function handlerSubmit(request, popupInstance, loadingText = 'Сохранение...') {
	popupInstance.renderLoading(true, loadingText);
	request()
		.then(() => {
			popupInstance.close();
		})
		.catch((error) => {
			console.error(`Ошибка: ${error}`);
		})
		.finally(() => {
			popupInstance.renderLoading(false);
		});
}


avatarPageButtonOpen.addEventListener('click', () => {
	popupEditAvatar.open();
	formValidators[avatarPopupForm.getAttribute('name')].resetValidation();
});
userPageButtonOpen.addEventListener('click', () => {
	const currentUserInfo = userInfo.getUserInfo();
	popupEditUser.setInputValues(currentUserInfo);
	popupEditUser.open();
	formValidators[userPopupForm.getAttribute('name')].resetValidation();
});
cardAddPageButtonOpen.addEventListener('click', () => {
	popupCardAdd.open();
	formValidators[cardAddPopupForm.getAttribute('name')].resetValidation();
});

const formValidators = {};

const enableValidation = (configValidation) => {
	const formList = Array.from(
		document.querySelectorAll(configValidation.formSelector)
	);
	formList.forEach((formElement) => {
		const validator = new FormValidator(configValidation, formElement);
		const formName = formElement.getAttribute('name');

		formValidators[formName] = validator;
		validator.enableValidation();
	});
};

enableValidation(configValidation);

popupEditAvatar.setEventListeners();
popupEditUser.setEventListeners();
popupCardAdd.setEventListeners();
popupWithImage.setEventListeners();
popupWithSubmit.setEventListeners();

const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
	headers: {
		authorization: '4fcc9266-4211-4306-96d7-ded80bf1bc2a',
		'Content-Type': 'application/json',
	},
});

let userId;

api
	.getAppInfo()
	.then(([userData, cardData]) => {
		userId = userData._id;
		userInfo.setUserInfo({
			name: userData.name,
			about: userData.about,
			avatar: userData.avatar,
			_id: userData._id,
		});
		sectionCards.sectionRenderer(cardData);
	})
	.catch((error) => console.error(`Ошибка: ${error}`));
