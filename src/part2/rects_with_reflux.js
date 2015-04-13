// 2 React components

var Rect = React.createClass({

  componentDidMount: function() {
    var $el = $(React.findDOMNode(this.refs.root));
    $el.draggable({
      stop: function() {
        var _top = $el.css('top');
        var _left = $el.css('left');
        RectangleActions.move(this.props.item.id, _top, _left);
      }.bind(this)
    });
  },

  render: function() {
    var style = {
      top: this.props.item.top,
      left: this.props.item.left,
      background: this.props.item.color
    };

    return <div className='rect' style={style} ref="root"></div>
  }
});

var RectsContainer = React.createClass({
  componentDidMount: function() {
    this.unsubscribe = RectangleStore.listen(this.onChange);
  },

  getInitialState: function() {
    return { items: [] };
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  onChange: function() {
    this.setState({ items: RectangleStore.items});
  },

  addRect: function() {
    RectangleActions.create();
  },

  clear: function() {
    RectangleActions.clear();
  },

  render: function() {
    return (
      <div>
        <button onClick={this.addRect}>Add</button>
        <button onClick={this.clear}>Clear</button>
        <div className='container'>
        {this.state.items.map(function(item) {
          return <Rect item={item} />
        })}
        </div>
      </div>
    )
  }

});














