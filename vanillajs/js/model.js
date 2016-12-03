/* ==========================
	Model
   ========================== */
var model = {
	cats: [
		{ name: 'Pixel', src: 'cat-01', count: 5 },
		{ name: 'Davi', src: 'cat-02', count: 1 },
		{ name: 'Jerry', src: 'cat-03', count: 3 },
		{ name: 'Tom', src: 'cat-04', count: 0 }
	],

	getAllCats: function() {
		return this.cats;
	}
};