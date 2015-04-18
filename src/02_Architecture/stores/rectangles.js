// Actions
var RectActions = Reflux.createActions(['create', 'move', 'clear']);

// Store
var colors =  ['red', 'blue', 'yellow', 'purple', 'gray'];

var RectStore = Reflux.createStore({
  listenables: RectActions,

  init: function() {
    this.items = [];
    this.nextId = 0;
  },

  onCreate: function() {
    var _color = _.sample(colors);
    var _id = this.nextId++;
    this.items.push({ id: _id, color: _color, top: '0px', left: '0px' });
    this.triggerAsync();
  },

  onSave: function() {
    localStorage.setItem('rects', JSON.stringify(this.items));
  },

  onLoad: function() {
    var data = localStorage.getItem('rects');
    if ( data != null ) {
      this.items = JSON.parse(data);
    }
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

