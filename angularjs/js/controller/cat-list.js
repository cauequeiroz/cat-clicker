/* -------------------------------------------

    Cat Clicker
    @AngularJS Version
    @Developed by Caue Queiroz	

-------------------------------------------- */
angular.module('CatClicker')

.controller('listCtrl', ['catModel', function(model) {
    this.cats = model.getAllCats();
}]);
    