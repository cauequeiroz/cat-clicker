/* -----------------------------------------------

    @Controller
    Control side list feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('infoCtrl', ['$scope', 'CatClicker', function($scope, model) {
    
    // Controller reference
    // ------------------------------------------
    var self = this;

    // Get current cat
    // ------------------------------------------
    self.cat = model.getCat();

    $scope.$watch(function() { return model.getCat(); }, function(newVal) { 
        self.cat = newVal;
    }, true);

    // Cat info methods
    // ------------------------------------------
    self.likeCat = function() {
        console.log('caue');
        model.likeCat();
    };
}]);