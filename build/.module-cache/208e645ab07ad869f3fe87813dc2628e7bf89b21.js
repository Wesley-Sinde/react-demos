var RateIt = React.createClass({displayName: "RateIt",
  getInitialState: function() {
    return { rating: 0 }
  },
  componentDidMount: function() {
    var el = React.findDOMNode(this.refs.rate);
    $(el).rateYo({
      onSet: function(newVal) {
        this.setState({rating: newVal});
      }.bind(this)
    });
  },

  render: function () {
    return React.createElement("div", {ref: "rate"})
  }
});

