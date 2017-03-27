import alt from '../alt.js';
import FooterActions from '../actions/FooterActions.js';

class FooterStore {
	constructor() {
		this.bindActions(FooterActions);
		this.characters = [];
	}

	onGetTopCharactersSuccess(data) {
		this.characters = data.slice(0, 5);
	}

	onGetTopCharactersFail(jqXhr) {
		toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	}
}

export default alt.createStore(FooterStore);