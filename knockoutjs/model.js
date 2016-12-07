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