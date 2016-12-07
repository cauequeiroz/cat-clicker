var App = function() {
	var self = this;

	self.currentCat = ko.observable( new Cat() );

	self.increment = function() {
		var cat = self.currentCat();
		cat.count( cat.count() + 1 );
	}
};

ko.applyBindings( new App() );