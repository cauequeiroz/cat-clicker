/* ==========================

    Cat Clicker
    Developed by Caue Queiroz

   ========================== */
var app = {
    init: function() {
        view.init();

        view.updateList(model.getCurrent());
        view.renderCat(model.getCat(), model.getCurrent());
    },

    getCatNames: function() {
        return model.getAllCats().map(function(elem, index) {
            return {id: index, name: elem.name};
        });
    },

    clickList: function(e) {
        if ( e.target.tagName !== 'LI' ) return;

        var id = e.target.getAttribute('data-id');

        if ( id !== model.getCurrent() ) {
            model.setCurrent(id);
            view.updateList(id);
            view.renderCat(model.getCat(), id);
        }
    },

    clickView: function(e) {
        if ( e.target.tagName !== 'IMG' ) return;

        model.updateCat();
        view.updateCat(model.getCat());
    },

    showAdmin: function() {
        document.querySelector('.admin-form').style.display = 'block';
    },

    hideAdmin: function() {
        document.querySelector('.admin-form .name').value = '';
        document.querySelector('.admin-form .url').value = '';
        document.querySelector('.admin-form').style.display = 'none';
    },

    addCat: function() {
        var name = document.querySelector('.admin-form .name').value,
            url  = document.querySelector('.admin-form .url').value;

        if ( !name || !url ) return;

        model.add({ name: name, src: url });
        model.setCurrent(model.getAllCats().length - 1);
        
        view.renderList();
        view.updateList(model.getCurrent());
        view.renderCat(model.getCat(), model.getCurrent());

        app.hideAdmin();
    }
};

app.init();