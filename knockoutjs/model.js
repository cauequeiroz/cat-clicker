var Cat = function(info) {
	this.name  = ko.observable(info.name);
	this.count = ko.observable(info.count);
	this.image = ko.observable(info.image);
	this.nicks = ko.observableArray(info.nicks);

	this.level = ko.computed(function() {
		var n = this.count(),
			t;

		if ( n < 10 ) {
			t = 'baby';
		}
		else if ( n >= 10 && n < 15 ) {
			t = 'child';
		}
		else if ( n >= 15 ) {
			t = 'teen';
		}

		return t;
	}, this);
};

var initialCats = [
	{ name: 'Pixel', src: 'img/cat-01.jpg', count: 5, nicks: ['nick01', 'nick02', 'nick03'] },
    { name: 'Garfield', src: 'img/cat-02.jpg', count: 1, nicks: ['nick04', 'nick05', 'nick06'] },
    { name: 'Bichento', src: 'img/cat-03.jpg', count: 3, nicks: ['nick07', 'nick08', 'nick09'] },
    { name: 'Tom', src: 'img/cat-04.jpg', count: 0, nicks: ['nick10', 'nick11', 'nick12'] },
    { name: 'Buttercup', src: 'img/cat-05.jpg', count: 3, nicks: ['nick12', 'nick13', 'nick14'] }
];