var RateIt = React.createClass({displayName: "RateIt",
  componentDidMount: function() {
    var el = React.findDOMNode(this.refs.rate);
  },

  render: function () {
    return React.createElement("div", {ref: "rate"})
  }
});

