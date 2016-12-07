var Cat = function() {
	this.name  = ko.observable('Pixel');
	this.count = ko.observable(2);
	this.image = ko.observable('img/cat-01.jpg');
	this.nicks = ko.observableArray(['Mr. P.', 'Pix', 'El', 'PewPew']);

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