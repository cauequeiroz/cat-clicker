/* -------------------------------------------

    Cat Clicker
    @AngularJS Version
    @Developed by Caue Queiroz	

-------------------------------------------- */
angular.module('CatClicker')

.controller('listCtrl', ['catModel', function(model) {
    this.cats = model.getAllCats();
    this.current = model.getCat();

    this.isSelected = function(item) {
        return item.name === this.current.name;
    };
}]);
    