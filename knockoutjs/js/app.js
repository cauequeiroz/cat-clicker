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
};

ko.applyBindings( new App() );