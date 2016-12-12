/* -------------------------------------------

    Cat Clicker
    @AngularJS Version
    @Developed by Caue Queiroz  

-------------------------------------------- */
angular.module('CatClicker')

.controller('infoCtrl', ['catModel', function(model) {
    this.cat = model.getCat();
}]);