/* -----------------------------------------------

    @Service
    Cat Clicker general data.

----------------------------------------------- */
angular.module('CatClicker')

.service('CatClicker', function() {

    // Generate some cats
    // ------------------------------------------
    this.catList = [
        { name: 'Pixel', src: 'img/cat-01.jpg', count: 5 },
        { name: 'Garfield', src: 'img/cat-02.jpg', count: 1 },
        { name: 'Bichento', src: 'img/cat-03.jpg', count: 3 },
        { name: 'Tom', src: 'img/cat-04.jpg', count: 0 },
        { name: 'Buttercup', src: 'img/cat-05.jpg', count: 3 },
    ];

    this.currentCat = this.catList[0];

    // Control functions
    // ------------------------------------------
    this.getCat = function() {
        return this.currentCat;
    };

    this.setCat = function(index) {
        this.currentCat = this.catList[index];
    };

    this.getAllCats = function() {
        return this.catList;
    };

    this.likeCat = function() {
        this.currentCat.count++;
    };

});