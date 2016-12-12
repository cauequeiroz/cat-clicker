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

    // New cat models
    // ------------------------------------------
    self.newCat = { name: '', image: '' };

    // Admin methods
    // ------------------------------------------
    self.closeAdmin = function() {
        self.newCat = { name: '', image: '' };
        model.closeAdmin();
    };

    self.saveAdmin = function() {
        if ( self.newCat.name !== '' && self.newCat.image !== '' ) {
            model.addCat(self.newCat);
            model.closeAdmin();
        }        
    };

}]);