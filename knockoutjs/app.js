var app = function() {

	this.name  = ko.observable('Pixel');
	this.count = ko.observable(4);
	this.image = ko.observable('img/cat-01.jpg');
	this.nicks = ko.observableArray(['Pix', 'Sweet', 'El', 'Mr. P.']);

	this.level = ko.computed(function() {
		var n = this.count(),
			r = 'baby';

		if ( n >= 10 && n < 25 ) {
			r = 'teen';
		}
		else if ( n >= 25 && n < 50 ) {
			r = 'adult';
		}
		else if ( n >= 50 ) {
			r = 'grandpa';
		}

		return r;

	}, this);

	this.increment = function() {
		this.count( this.count() + 1 );
	};

};

ko.applyBindings(new app());