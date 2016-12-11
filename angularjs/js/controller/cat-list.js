/* -------------------------------------------

    Cat Clicker
    @AngularJS Version
    @Developed by Caue Queiroz	

-------------------------------------------- */
angular.module('CatClicker')

.controller('listCtrl', ['catModel', function(model) {
    
    // Import cats from model
    // ========================================
    this.cats = model.getAllCats();
    this.current = model.getCat();

    // List methods
    // ========================================
    this.changeCat = function(index) {
        model.setCat(index);
        this.current = model.getCat();
    };

    this.isSelected = function(cat) {
        return cat.name === this.current.name;
    };
    
}]);
    