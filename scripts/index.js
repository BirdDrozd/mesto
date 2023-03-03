const profileButtonEdit = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

const popupButtonClose = popup.querySelector(".popup__button-close");

function closePopup() {
  popup.classList.remove("popup_opened")
}

let nameInput = popup.querySelector(".popup__input_name");
let aboutInput = popup.querySelector(".popup__input_about");
let popupForm = popup.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");



function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup()
}

profileButtonEdit.addEventListener("click", openPopup);
popupButtonClose.addEventListener("click", closePopup);
popupForm.addEventListener("submit", submitForm);