/* -----------------------------------------------

    @Controller
    Control add new cat feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('adminCtrl', ['$scope', 'CatClicker', function($scope, model) {

    // Controller reference
    // ------------------------------------------
    var self = this;

    // Admin panel visibility
    // ------------------------------------------
    self.show = model.getAdminState();

    $scope.$watch(function() { return model.getAdminState(); }, function(newVal) { 
        self.show = newVal;
    }, true);

    // Admin methods
    // ------------------------------------------
    self.closeAdmin = function() {
        model.closeAdmin();
    };

    self.saveAdmin = function() {
        model.closeAdmin();
    };

}]);