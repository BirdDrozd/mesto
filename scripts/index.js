const profileButtonEdit = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.remove("popup_hidden")
}
profileButtonEdit.addEventListener("click", openPopup);

const popupButtonClose = popup.querySelector(".popup__button-close");

function closePopup() {
  popup.classList.add("popup_hidden")
}
popupButtonClose.addEventListener("click", closePopup);

let nameInput = popup.querySelector(".popup__name");
console.log("поле имени: ", nameInput);
let aboutInput = popup.querySelector(".popup__about");
console.log("поле о себе: ", aboutInput);
const popupButtonSave = popup.querySelector(".popup__button-save");
console.log("сохранение: ", popupButtonSave);
let popupForm = popup.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

nameInput.value = profileName.textContent;
aboutInput.value = profileAbout.textContent;

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup()
}

popupForm.addEventListener("submit", submitForm);