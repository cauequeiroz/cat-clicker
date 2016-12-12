/* -----------------------------------------------

    @Controller
    Control side list feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('ListCtrl', ['$scope','CatClicker', function($scope, model) {

    // Controller reference
    // ------------------------------------------
    var self = this;

    // Get all cats
    // ------------------------------------------
    this.cats = model.getAllCats();

    // List methods
    // ------------------------------------------
    this.isSelected = function(cat) {
        return cat.name === model.getCat().name;
    };

    this.changeCat = function(index) {
        model.setCat(index);
    };

}]);