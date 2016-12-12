/* -----------------------------------------------

    @Controller
    Control side list feature.

----------------------------------------------- */
angular.module('CatClicker')

.controller('infoCtrl', ['$scope', 'CatClicker', function($scope, model) {
    this.cat = model.getCat();
}]);