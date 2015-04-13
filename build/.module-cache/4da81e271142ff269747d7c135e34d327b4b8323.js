// 2 React components

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
      color: 'white'
    };
  },

  getInitialState: function() {
    return { top: this.props.top, left: this.props.left };
  },

  componentDidMount: function() {

  },



  render: function() {
    var style = {
      top: this.state.top,
      left: this.state.left,
      background: this.props.color
    };

    return React.createElement("div", {style: style, ref: "root"})
  }


});

var RectsContainer = React.createClass({displayName: "RectsContainer",

});