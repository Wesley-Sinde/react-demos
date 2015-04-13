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

  


});

var RectsContainer = React.createClass({displayName: "RectsContainer",

});