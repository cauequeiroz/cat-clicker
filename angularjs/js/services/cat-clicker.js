/* -----------------------------------------------

    @Service
    Cat Clicker general data and methods.

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

    this.addCat = function(cat) {
        this.catList.push({
            name: cat.name,
            src: cat.image,
            count: 0
        });

        this.currentCat = this.catList[this.catList.length - 1];
    };

    // Admin methods and properties
    // ------------------------------------------
    this.adminPanel = false;

    this.getAdminState = function() {
        return this.adminPanel;
    };

    this.openAdmin = function() {
        this.adminPanel = true;
    };

    this.closeAdmin = function() {
        this.adminPanel = false;
    };

});