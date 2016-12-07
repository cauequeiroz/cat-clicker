/* ==========================

    Cat Clicker
    Developed by Caue Queiroz

   ========================== */
var App = function() {
    var $this = this;

    // Get cats from model
    // ========================================
    $this.catList = ko.observableArray([]);
    
    initialCats.forEach(function(cat_data) {
        $this.catList.push( new Cat(cat_data) );
    });

    $this.currentCat = ko.observable( $this.catList()[0] );

    // Increment count and change cat
    // ========================================
    $this.increment = function() {
        var cat = $this.currentCat();
        cat.count( cat.count() + 1 );
    };

    $this.changeCat = function(cat, elem) {
        $this.currentCat( cat );
    };

    // Admin control stuff
    // ========================================
    $this.canShowAdmin = ko.observable(false);
    $this.showAdmin = function() {
        $this.canShowAdmin(true);
    };
    $this.hideAdmin = function() {
        $this.canShowAdmin(false);
    };

    // Add new cat stuff
    // ========================================
    $this.newCatName  = ko.observable('');
    $this.newCatImage = ko.observable('');

    $this.addCat = function() {
        if ( $this.newCatImage() === '' && $this.newCatImage() === '' ) return;

        $this.catList.push( new Cat({
            name: $this.newCatName(),
            src: $this.newCatImage(),
            count: 0
        }) );

        $this.newCatName('');
        $this.newCatImage('');

        $this.hideAdmin();

        $this.currentCat( $this.catList()[$this.catList().length - 1] );
    }
};

ko.applyBindings( new App() );