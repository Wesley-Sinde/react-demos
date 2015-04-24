// 2 React components

var Rect = React.createClass({displayName: "Rect",

  componentDidMount: function() {
    var $el = $(React.findDOMNode(this.refs.root));
    $el.draggable({
      stop: function() {
        var _top = $el.css('top');
        var _left = $el.css('left');

        RectActions.move(this.props.item.id, _top, _left);
      }.bind(this)
    });
  },

  render: function() {
    var style = {
      top: this.props.item.top,
      left: this.props.item.left,
      background: this.props.item.color
    };

    return (React.createElement("div", {className: "rect", style: style, ref: "root"}));
  }
});

var RectsContainer = React.createClass({displayName: "RectsContainer",
  componentDidMount: function() {
    this.unsubscibe = RectStore.listen(this.onChange);
  },

  componentWillUnmount: function() {
    this.unsubscibe();
  },

  onChange: function() {
    this.setState({items: RectStore.items});
  },

  getInitialState: function() {
    return { items: RectStore.items }
  },

  addRect: function() {
    RectActions.create();
  },

  clear: function() {
    RectActions.clear();
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.addRect}, "Add"), 
        React.createElement("button", {onClick: this.clear}, "Clear"), 
        React.createElement("div", {className: "container"}, 
        this.state.items.map(function(item) {
          return React.createElement(Rect, {item: item})
        })
        )
      )
    );
  }

});















