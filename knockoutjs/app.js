var app = function() {

	this.name  = ko.observable('Pixel');
	this.count = ko.observable(2);
	this.image = ko.observable('img/cat-01.jpg');

	this.increment = function() {
		this.count( this.count() + 1 );
	};

};

ko.applyBindings(new app());