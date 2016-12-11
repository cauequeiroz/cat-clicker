/* ==========================
    Model
   ========================== */
var model = {
    cats: [
        { name: 'Pixel', src: 'img/cat-01.jpg', count: 5 },
        { name: 'Garfield', src: 'img/cat-02.jpg', count: 1 },
        { name: 'Bichento', src: 'img/cat-03.jpg', count: 3 },
        { name: 'Tom', src: 'img/cat-04.jpg', count: 0 },
        { name: 'Buttercup', src: 'img/cat-05.jpg', count: 3 },
    ],

    currentCat: 0,

    setCurrent: function(value) {
        this.currentCat = value;
    },

    getCurrent: function() {
        return this.currentCat;
    },

    getAllCats: function() {
        return this.cats;
    },

    getCat: function() {
        return this.cats[this.currentCat];
    },

    updateCat: function() {
        this.cats[this.currentCat].count++;
    },

    add: function(cat) {
        this.cats.push({
            name: cat.name,
            src: cat.src,
            count: 0
        });
    }
};