var ProductsStore = Reflux.createStore({
  init: function() {
    this.items = [
      { id: 1, name: 'iPhone', description: 'cool but expensive phone' },
      { id: 2, name: 'Galaxy', description: 'Android is too complex for me'},
      { id: 3, name: 'Lumia', description: 'Look Ma no apps'}
    ];
  },

  getItem: function(id) {
    return _.findWhere(this.items, { id: Number(id) });
  }
});
