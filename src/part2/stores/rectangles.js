/*global Reflux */
(function(ns) {
  ns.RectangleActions = Reflux.createActions(['create', 'move', 'clear']);

  var colors = ['red', 'blue', 'green', 'purple', 'cyan', 'magenta'];

  ns.RectangleStore = Reflux.createStore({
    listenables: ns.RectangleActions,
    init: function() {
      this.items = [];
      this.nextId = 0;
    },
    onCreate: function() {
      var _clr = _.sample(colors);
      var _id = this.nextId++;
      this.items.push({ id: _id, top: '0px', left: '0px', color: _clr });
      this.triggerAsync();
    },
    onMove: function(id, top, left) {
      var item = _.findWhere(this.items, { id: id });
      item.top = top;
      item.left = left;
      this.triggerAsync();
    },
    onClear: function() {
      this.items = [];
      this.triggerAsync();
    }
  });

}(this));
