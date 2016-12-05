/* ==========================
    Model
   ========================== */
var model = {
    cats: [
        { name: 'Pixel', src: 'cat-01', count: 5 },
        { name: 'Garfield', src: 'cat-02', count: 1 },
        { name: 'Bichento', src: 'cat-03', count: 3 },
        { name: 'Tom', src: 'cat-04', count: 0 },
        { name: 'Buttercup', src: 'cat-05', count: 3 },
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
    }
};