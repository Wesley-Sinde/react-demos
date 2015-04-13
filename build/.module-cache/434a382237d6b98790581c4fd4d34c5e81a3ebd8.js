var Rect = React.createClass({displayName: "Rect",
  propTypes: {
    top: React.PropTypes.string,
    left: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      top: '0px',
      left: '0px',
      color: 'blue'
    };
  },

  componentDidMount: function() {
    var $el = $(React.findDOMNode(this.refs.root));
    var _this = this;
    $el.draggable({
      stop: function() {
        var _top = $el.css('top');
        var _left = $el.css('left');
        _this.setState({top: _top, left: _left});
      }
    });
  },

  getInitialState: function() {
    return {
      top: this.props.top,
      left: this.props.left,
      color: this.props.color
    }
  },

  render: function() {
    var style = {
      top: this.state.top,
      left: this.state.left,
      background: this.state.color,
      width: '100px',
      height: '100px'
    };

    return React.createElement("div", {ref: "root", style: style})
  }

});

var RectsContainer = React.createClass({displayName: "RectsContainer",
  propTypes: {
    colors: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps: function() {
    return {
      colors:['red', 'blue', 'green', 'white', 'yellow', 'cyan', 'magenta', 'purple']
    };
  },

  getInitialState: function() {
    return { items: [] }
  },
  createNewRectangle: function() {
    var color = _.sample(this.props.colors);
    this.state.items.push(React.createElement(Rect, {color: color}));
    this.forceUpdate();
  },

  clear: function() {
    this.setState({items: []});
  },

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.createNewRectangle}, "Add"), 
        React.createElement("button", {onClick: this.clear}, "Clear"), 
        React.createElement("div", {className: "container"}, 
          this.state.items
        )
      )
    )
  }
});

