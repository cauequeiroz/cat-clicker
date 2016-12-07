var App = function() {
	this.currentCat = ko.observable( new Cat() );

	this.increment = function() {
		var cat = this.currentCat();
		cat.count( cat.count() + 1 );
	}
};

ko.applyBindings( new App() );