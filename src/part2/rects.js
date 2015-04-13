// 2 React components

var Rect = React.createClass({
  propTypes: {
    top: React.PropTypes.string,
    left: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      top: '0px',
      left: '0px',
      color: 'white'
    };
  },

  getInitialState: function() {
    return { top: this.props.top, left: this.props.left };
  },

  componentDidMount: function() {
    var $el = $(React.findDOMNode(this.refs.root));
    $el.draggable({
      stop: function() {
        var _top = $el.css('top');
        var _left = $el.css('left');
        this.setState({top: _top, left: _left});
      }.bind(this)
    });
  },

  render: function() {
    var style = {
      top: this.state.top,
      left: this.state.left,
      background: this.props.color
    };

    return (<div className='rect' style={style} ref="root"></div>);
  }
});

var RectsContainer = React.createClass({
  propTypes: {
    colors: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps: function() {
    return { colors: ['red', 'blue', 'yellow', 'purple', 'gray'] }
  },

  getInitialState: function() {
    return { items: [] }
  },

  addRect: function() {
    var _color = _.sample(this.props.colors);
    this.state.items.push(<Rect color={_color} /> );
    this.forceUpdate();
  },

  clear: function() {
    this.setState({items: []});
  },

  render: function() {
    return (
      <div>
        <button onClick={this.addRect}>Add</button>
        <button onClick={this.clear}>Clear</button>
        <div className='container'>
          {this.state.items}
        </div>
      </div>
    );
  }

});














