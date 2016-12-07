/* ==========================
    Model
   ========================== */
var Cat = function(data) {
    this.name  = ko.observable(data.name);
    this.count = ko.observable(data.count);
    this.image = ko.observable(data.src);
};

var initialCats = [
    { name: 'Pixel', src: 'img/cat-01.jpg', count: 5 },
    { name: 'Garfield', src: 'img/cat-02.jpg', count: 1 },
    { name: 'Bichento', src: 'img/cat-03.jpg', count: 3 },
    { name: 'Tom', src: 'img/cat-04.jpg', count: 0 },
    { name: 'Buttercup', src: 'img/cat-05.jpg', count: 3 },
];