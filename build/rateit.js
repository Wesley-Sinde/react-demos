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
    return (
      React.createElement("div", null, 
        React.createElement("div", {ref: "rate"}), 
        React.createElement("p", null, "You chose rating: ", this.state.rating)
      )
    )
  }
});

