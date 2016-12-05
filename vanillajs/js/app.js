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
		var click = e.target.getAttribute('data-id');

		if ( click !== model.getCurrent() ) {
			model.setCurrent(click);
			view.updateList();
		}
	}
};

app.init();