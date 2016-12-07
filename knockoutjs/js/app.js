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
};

ko.applyBindings( new App() );