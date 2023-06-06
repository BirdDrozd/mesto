export class UserInfo { 
	constructor (profileNameElement, profileAboutElement) { 
		this._profileNameElement = profileNameElement; 
		this._profileAboutElement = profileAboutElement; 
	} 

	getUserInfo() { 
		return { 
			name: this._profileNameElement.textContent, 
			about: this._profileAboutElement.textContent 
		}; 
	} 

	setUserInfo({name, about}) { 
		this._profileNameElement.textContent = name; 
		this._profileAboutElement.textContent = about; 
	} 
}
