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
	{name: 'Pixel', src:'cat-01', count:5},
	{name: 'Davi', src:'cat-02', count:1},
	{name: 'Jerry', src:'cat-03', count:3}
];

function init() {
	
	// generate cat list
	generateCatList();

}
init();

function generateCatList() {
	var html = '',
		num  = cats.length;

	for ( var i=0; i<num; i++ ) {
		html += '<li data-id="'+i+'">'+cats[i].name+'</li>';
	}

	document.querySelector('.cat-list').innerHTML = html;
	document.querySelector('.cat-list').addEventListener('click', function(e) {
		loadCat(e.target.getAttribute('data-id'));
	}, false);
}

function loadCat(id) {
	var $ctn = document.querySelector('.cat-view'),
		html = '';

	html = HTMLCat
			.replace('%id%', id)
			.replace('%name%', cats[id].name)
			.replace('%count%', cats[id].count)
			.replace('%src%', cats[id].src);

	$ctn.innerHTML = html;
	$ctn.querySelector('.cat-img').addEventListener('click', catClick, false);
}

function catClick() {
	var i = this.parentNode.getAttribute('data-id'),
		count = this.parentNode.querySelector('.cat-count');

	count.innerHTML = ++cats[i].count;
}