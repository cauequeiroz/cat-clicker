// Cat Template
var HTMLCat = '<div class="cat" data-id="%id%">\
	<img class="cat-img" src="img/%src%.jpg">\
	<p class="cat-info">\
		<span class="cat-name">%name%</span>\
		<span class="cat-count">%count%</span>\
	</p>\
</div>';

// Cat Model
var cats = [
	{name: 'Pixel', src:'cat-01', count:0},
	{name: 'Davi', src:'cat-02', count:0}
];

function generateCats() {
	var l = cats.length,
		html = '';
	for (var i=0; i<l; i++) {
		html += HTMLCat
					.replace('%id%', i)
					.replace('%name%', cats[i].name)
					.replace('%count%', cats[i].count)
					.replace('%src%', cats[i].src);
	}

	document.querySelector('.board').innerHTML = html;

	var elems = document.querySelectorAll('.cat-img'),
		l     = elems.length;
	for ( var i=0; i<l; i++ ) {
		elems[i].addEventListener('click', catClick, false);
	}
}

function catClick() {
	var i = this.parentNode.getAttribute('data-id'),
		count = this.parentNode.querySelector('.cat-count');

	count.innerHTML = ++cats[i].count;
}

generateCats();