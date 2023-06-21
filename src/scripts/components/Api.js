class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}

	_checkResponse(result) {
		return result.ok
			? result.json()
			: Promise.reject(`Ошибка: ${result.status}`);
	}

	_request(endpoint, options) {
		return fetch(`${this._baseUrl}${endpoint}`, options).then(
			this._checkResponse
		);
	}

	getUserInfo() {
		return this._request(`/users/me`, {
			headers: this._headers,
		});
	}

	getCardsInitial() {
		return this._request(`/cards`, {
			headers: this._headers,
		});
	}

	getAppInfo() {
		return Promise.all([this.getUserInfo(), this.getCardsInitial()]);
	}

	updateUserInfo({ name, about }) {
		return this._request(`/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				about: about,
			}),
		});
	}

	updateUserAvatar(link) {
		return this._request(`/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: link,
			}),
		});
	}

	addCard({ name, link }) {
		return this._request(`/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				link: link,
				name: name,
			}),
		});
	}

	deleteCard(id) {
		return this._request(`/cards/${id}`, {
			method: 'DELETE',
			headers: this._headers,
		});
	}

	setLike(id) {
		return this._request(`/cards/${id}/likes`, {
			method: 'PUT',
			headers: this._headers,
		});
	}

	removeLike(id) {
		return this._request(`/cards/${id}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		});
	}
}

export { Api };