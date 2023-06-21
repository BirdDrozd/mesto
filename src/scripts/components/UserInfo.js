class UserInfo {
	constructor ({ selectorAvatar, selectorName, selectorAbout }) {
		this._userAvatarElement = document.querySelector(selectorAvatar)
		this._userNameElement = document.querySelector(selectorName);
		this._userAboutElement = document.querySelector(selectorAbout);
	}

	getUserAvatar() {
		return this._userAvatarElement
	}

	getUserInfo() {
		return {
			name: this._userNameElement.textContent,
			about: this._userAboutElement.textContent
		}
	}

	setUserInfo({ name, about, avatar, _id }) {
		this._userNameElement.textContent = name;
		this._userAboutElement.textContent = about;
		this._userAvatarElement.src = avatar;
		this._userAvatarElement._id = _id;
	}
}

export { UserInfo }
