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
    }
};

app.init();