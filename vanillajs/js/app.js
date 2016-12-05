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
		model.currentCat = e.target.getAttribute('data-id');
		view.updateList();
	}
};

app.init();