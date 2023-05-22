export class Section {
	constructor({ renderer, selector }) {
		this._renderer = renderer;
		this._section = document.querySelector(selector);
	}

	_clear() {
		this._section.innerHTML = '';
	}

	sectionRenderer(items){
		this._clear();

		items.forEach(item => this._renderer(item));
	}

	addRenderedItem(item){
		this._section.append(item);
	}

	addNewItem(item){
		this._section.prepend(item);
	}
}