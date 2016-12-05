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

	updateList: function() {
		var cat  = model.getCurrent(),
			prev = document.querySelector('.selected'),
			elem = document.querySelectorAll('.cat-list li')[cat];

		if ( prev ) {
			prev.classList.remove('selected');
		}

		elem.classList.add('selected');
		console.log('mudou');
	},

	init: function() {
		this.$list = document.querySelector('.cat-list ul');
		this.$view = document.querySelector('.cat-view');

		this.renderList();

		this.$list.addEventListener('click', app.clickList, false);
	}
};