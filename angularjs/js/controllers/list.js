/* -----------------------------------------------

    @Controller
    Control side list feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('ListCtrl', ['CatClicker', function(model) {

    // List methods
    // ------------------------------------------
    this.isSelected = function() {
        return true;
    };

}]);