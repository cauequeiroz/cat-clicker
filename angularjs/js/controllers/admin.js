/* -----------------------------------------------

    @Controller
    Control add new cat feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('adminCtrl', ['CatClicker', function() {

    // Controller reference
    // ------------------------------------------
    var self = this;

    // Admin panel visibility
    // ------------------------------------------
    self.show = false;

}]);