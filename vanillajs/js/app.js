/* ==========================

	Cat Clicker
	Developed by Caue Queiroz

   ========================== */
var app = {
	init: function() {
		view.init();
	},

	getCatNames: function() {
		return model.getAllCats().map(function(elem, index) {
			return {id: index, name: elem.name};
		});
	},

	clickList: function(e) {
		if ( e.target.tagName !== 'LI' ) return;

		var id = e.target.getAttribute('data-id');

		if ( id !== model.getCurrent() ) {
			model.setCurrent(id);
			view.updateList();
			view.renderCat();
		}
	}
};

app.init();