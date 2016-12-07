var App = function() {
	var self = this;

	self.currentCat = ko.observable( new Cat({
		count: 0,
		name: 'Pixel',
		image: 'img/cat-01.jpg',
		nicks: ['Mr. P.', 'Pix', 'El', 'PewPew']
	}) );

	self.increment = function() {
		var cat = self.currentCat();
		cat.count( cat.count() + 1 );
	}
};

ko.applyBindings( new App() );