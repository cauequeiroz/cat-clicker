/* ==========================

    Cat Clicker
    Developed by Caue Queiroz

   ========================== */
var App = function() {
    var $this = this;

    $this.catList = ko.observableArray([]);
    
    initialCats.forEach(function(cat_data) {
        $this.catList.push( new Cat(cat_data) );
    });

    $this.currentCat = ko.observable( $this.catList()[0] );

    $this.increment = function() {
        var cat = $this.currentCat();
        cat.count( cat.count() + 1 );
    };

    $this.changeCat = function(cat, elem) {
        $this.currentCat( cat );
    };

    $this.canShowAdmin = ko.observable(false);
    $this.showAdmin = function() {
        $this.canShowAdmin(true);
    };
    $this.hideAdmin = function() {
        $this.canShowAdmin(false);
    };

    $this.newCatName  = ko.observable('');
    $this.newCatImage = ko.observable('');
    $this.addCat = function() {
        $this.catList.push( new Cat({
            name: $this.newCatName(),
            src: $this.newCatImage(),
            count: 0
        }) );

        $this.newCatName  = ko.observable('');
        $this.newCatImage = ko.observable('');

        $this.hideAdmin();

        $this.currentCat( $this.catList()[$this.catList().length - 1] );
    }
};

ko.applyBindings( new App() );