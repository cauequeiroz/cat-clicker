/* -----------------------------------------------

    @Controller
    Control side list feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('ListCtrl', ['$scope','CatClicker', 'adminCtrl', function($scope, model, admin) {

    // Controller reference
    // ------------------------------------------
    var self = this;

    // Get all cats
    // ------------------------------------------
    self.cats = model.getAllCats();

    // List methods
    // ------------------------------------------
    self.isSelected = function(cat) {
        return cat.name === model.getCat().name;
    };

    self.changeCat = function(index) {
        model.setCat(index);
    };

    self.openAdmin = function() {
        console.log('open');
    };

}]);