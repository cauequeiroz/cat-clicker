/* ==========================
	View
   ========================== */
var view = {
	renderList: function() {
		var html = '';
		
		app.getCatNames().forEach(function(cat) {
			html += '<li data-id="'+cat.id+'">'+cat.name+'</li>';
		});

		this.$list.innerHTML = html;
	},

	init: function() {
		this.$list = document.querySelector('.cat-list ul');
		this.$view = document.querySelector('.cat-view');

		this.renderList();
	}
};