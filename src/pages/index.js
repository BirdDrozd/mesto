import  './index.css';
import {
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
} from '../scripts/utils/constants.js'; 
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';


const userInfo = new UserInfo (profileNameSelector, profileAboutSelector);



const popupProfileEdit = new PopupWithForm({ 
	selector: popupEditProfileSelector, 
	handleSubmitForm: (data) => {
		userInfo.setUserInfo(data);
		popupProfileEdit.close();
	}
});


const popupCardAdd = new PopupWithForm({
	selector: popupElementAddSelector,
	handleSubmitForm: (item) => {
		sectionCards.addNewItem(createCard(item));
		popupCardAdd.close();
	}
});

const popupWithImage = new PopupWithImage({ selector: popupElementFullScreenSelector });

const sectionCards = new Section ({
	renderer: (data) => {
		sectionCards.addRenderedItem(createCard(data));
	},
	selector: elementsSectionSelector
});

function createCard(data) {
  const card = new Card({
    dataCard: {
      name: data.name,
      link: data.link 
    },
    cardTemplate: cardTemplateSelector,
    handlerCardClick: (name, link) => popupWithImage.open(name, link)
  });

  return card.generateCard();
}


const popupEditFormValidator = new FormValidator(configValidation, popupEditProfileSelector);
const photoAddPopupFormValidator = new FormValidator(configValidation, popupElementAddSelector);


popupProfileEdit.setEventListeners();
popupCardAdd.setEventListeners();
popupWithImage.setEventListeners();

sectionCards.sectionRenderer(initialCards);


popupEditFormValidator.enableValidation();
photoAddPopupFormValidator.enableValidation();


document.addEventListener('DOMContentLoaded', () => {
  const buttonEdit = document.querySelector('.profile__button-edit');
  const buttonAdd = document.querySelector('.profile__button-add');

  buttonEdit.addEventListener('click', () => {
    const currentInfoProfile = userInfo.getUserInfo();
    popupProfileEdit.setInputValues(currentInfoProfile);
    popupProfileEdit.open();

    popupEditFormValidator.resetValidation();
  });

  buttonAdd.addEventListener('click', () => {
    popupCardAdd.open();
    photoAddPopupFormValidator.resetValidation();
  });
});